import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/products'
import { SITE_NAME, LOCATION, SHOP_DAYS } from '../config'
import { useWishlist } from '../context/WishlistContext'

export default function Header() {
  const { wishlist } = useWishlist()

  return (
    <header className="header">
      <div className="header__announcement">
        <span className="header__announcement-item">
          <PinIcon />
          {LOCATION}
        </span>
        <span className="header__announcement-divider">•</span>
        <span className="header__announcement-item">
          <ShopIcon />
          Shop open {SHOP_DAYS}
        </span>
        <span className="header__announcement-divider">•</span>
        <span className="header__announcement-item">
          <ChatIcon />
          Order anytime on WhatsApp
        </span>
      </div>

      <div className="header__top">
        <button className="icon-btn" aria-label="Search">
          <SearchIcon />
        </button>

        <NavLink to="/" className="logo">
          <span className="logo__mark">❀</span>
          <span className="logo__text">{SITE_NAME}</span>
        </NavLink>

        <div className="header__actions">
          <button className="icon-btn icon-btn--badge" aria-label={`Wishlist (${wishlist.length} items)`}>
            <HeartIcon />
            <span className="badge">{wishlist.length}</span>
          </button>
          <button className="icon-btn" aria-label="Account">
            <UserIcon />
          </button>
          <button className="icon-btn" aria-label="Cart">
            <BagIcon />
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

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.3 4.5 6 4.2c2-.2 3.6 1 5 3 1.4-2 3-3.2 5-3 3.7.3 5.5 3.9 4 7.5-2.5 4.7-10 9.3-10 9.3z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
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

function ShopIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9h18v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" />
      <path d="M9 20v-5h6v5" />
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
