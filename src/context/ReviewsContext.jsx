import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'Mayra_reviews'
const ReviewsContext = createContext(null)

const seedReviews = [
  {
    id: 'seed-1',
    name: 'Khushboo',
    rating: 5,
    text: 'Please share ur review and feedback here',
    date: '2026-10-10'
  }
]

function readStoredReviews() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    return Array.isArray(parsed) ? parsed : seedReviews
  } catch {
    return seedReviews
  }
}

export function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState(readStoredReviews)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
    } catch {
      // storage unavailable — reviews still show for this session
    }
  }, [reviews])

  const addReview = ({ name, rating, text }) => {
    setReviews((prev) => [
      { id: `r-${Date.now()}`, name: name.trim(), rating, text: text.trim(), date: new Date().toISOString().slice(0, 10) },
      ...prev
    ])
  }

  return <ReviewsContext.Provider value={{ reviews, addReview }}>{children}</ReviewsContext.Provider>
}

export function useReviews() {
  const ctx = useContext(ReviewsContext)
  if (!ctx) throw new Error('useReviews must be used within a ReviewsProvider')
  return ctx
}
