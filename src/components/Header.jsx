import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/products'
import { SITE_NAME, LOCATION } from '../config'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { wishlist } = useWishlist()
  const { count, openCart } = useCart()

  return (
    <header className="header">
      <div className="header__announcement">
        <span className="header__announcement-item">
          <PinIcon />
          {LOCATION}
        </span>
        <span className="header__announcement-divider">•</span>
        <span className="header__announcement-item">
          <ChatIcon />
          Order anytime on WhatsApp
        </span>
      </div>

      <div className="header__top">
        <NavLink to="/" className="logo">
          <img src="/logo.png" alt={SITE_NAME} className="logo__img" />
        </NavLink>

        <div className="header__actions">
          <button className="icon-btn icon-btn--badge" aria-label={`Wishlist (${wishlist.length} items)`}>
            <HeartIcon />
            <span className="badge">{wishlist.length}</span>
          </button>
          <button className="icon-btn icon-btn--badge" aria-label={`Cart (${count} items)`} onClick={openCart}>
            <BagIcon />
            {count > 0 && <span className="badge">{count}</span>}
          </button>
        </div>
      </div>

      <nav className="nav">
        <ul className="nav__list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) => (isActive ? 'nav__item nav__item--active' : 'nav__item')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav__shipping">
          <TruckIcon />
          <span>EXPRESS SHIPPING</span>
        </div>
      </nav>
    </header>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.3 4.5 6 4.2c2-.2 3.6 1 5 3 1.4-2 3-3.2 5-3 3.7.3 5.5 3.9 4 7.5-2.5 4.7-10 9.3-10 9.3z" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 8h12l-1 13H7L6 8z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="7" width="14" height="10" rx="1" />
      <path d="M15 10h4l3 3v4h-7z" />
      <circle cx="6" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1L21 3l-1.2 4.1A8.5 8.5 0 0 1 21 11.5z" />
    </svg>
  )
}
