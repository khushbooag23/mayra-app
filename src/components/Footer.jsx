import { Link } from 'react-router-dom'
import { SITE_NAME, LOCATION, WHATSAPP_NUMBER, EMAIL_ID, SHOP_DAYS, SHOP_HOURS, GOOGLE_MAP_LINK } from '../config'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <span className="logo__mark">❀</span> {SITE_NAME}
      </div>
      {GOOGLE_MAP_LINK ? (
        <a href={GOOGLE_MAP_LINK} target="_blank" rel="noreferrer" className="footer__address footer__address--link">
          {LOCATION}
        </a>
      ) : (
        <p className="footer__address">{LOCATION}</p>
      )}
      <p className="footer__address">Shop open {SHOP_DAYS}, {SHOP_HOURS} · WhatsApp orders all week</p>
      {WHATSAPP_NUMBER && <p className="footer__phone">WhatsApp: +{WHATSAPP_NUMBER}</p>}
      {EMAIL_ID && <p className="footer__phone">{EMAIL_ID}</p>}
      <div className="footer__links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/support">Support</Link>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
    </footer>
  )
}
