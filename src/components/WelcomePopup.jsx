import { useEffect, useState } from 'react'
import { SITE_NAME, LOCATION, SHOP_DAYS, SHOP_HOURS, GOOGLE_MAP_LINK, buildWhatsAppLink } from '../config'

const SHOW_DELAY_MS = 800
const AUTO_CLOSE_MS = 10000

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!visible) return
    const closeTimer = setTimeout(() => setVisible(false), AUTO_CLOSE_MS)
    return () => clearTimeout(closeTimer)
  }, [visible])

  if (!visible) return null

  return (
    <div className="popup-overlay" onClick={() => setVisible(false)}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" aria-label="Close" onClick={() => setVisible(false)}>
          ×
        </button>
        <div className="popup-progress">
          <div className="popup-progress__bar" />
        </div>

        <span className="popup-icon">🛍️</span>
        <h2 className="popup-title">Contact Here!</h2>
        {GOOGLE_MAP_LINK ? (
          <a href={GOOGLE_MAP_LINK} target="_blank" rel="noreferrer" className="popup-location">
            📍 {LOCATION}
          </a>
        ) : (
          <p className="popup-location">📍 {LOCATION}</p>
        )}
        <p className="popup-hours">
          Open {SHOP_DAYS}, {SHOP_HOURS}
        </p>
        <p className="popup-text">Can't make it in person? Order anytime — we're just a message away on WhatsApp.</p>

        <a
          href={buildWhatsAppLink(`Hi! I'd like to know more about ${SITE_NAME}.`)}
          target="_blank"
          rel="noreferrer"
          className="popup-cta"
          onClick={() => setVisible(false)}
        >
          💬 Chat with us on WhatsApp
        </a>
      </div>
    </div>
  )
}
