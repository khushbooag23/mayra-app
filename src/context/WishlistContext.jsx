import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'myra_wishlist'
const WishlistContext = createContext(null)

function readStoredWishlist() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(readStoredWishlist)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist))
    } catch {
      // storage unavailable (e.g. private browsing) — wishlist still works for this session
    }
  }, [wishlist])

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]))
  }

  const isWishlisted = (id) => wishlist.includes(id)

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within a WishlistProvider')
  return ctx
}
