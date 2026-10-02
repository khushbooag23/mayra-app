import { SITE_NAME, LOCATION, SHOP_DAYS, SHOP_HOURS, ORIGIN_TAG, buildWhatsAppLink } from '../config'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__badge">✦ {ORIGIN_TAG} ✦</span>
        <span className="hero__eyebrow">Welcome to</span>
        <h1 className="hero__title">{SITE_NAME}</h1>
        <p className="hero__slogan">Short Kurtis Worth Adding to Your Wardrobe 👗✨</p>
        <p className="hero__subtitle">
          Authentic {ORIGIN_TAG} kurtis, straight from Jaipur — fresh prints, comfy fits, and new drops every
          week.
        </p>
        <p className="hero__location">📍 {LOCATION}</p>

        <div className="hero__info">
          <span>🛍️ Shop open {SHOP_DAYS}, {SHOP_HOURS}</span>
          <span>💬 Online orders on WhatsApp — open all week</span>
        </div>

        <div className="hero__actions">
          <a href="#shop" className="hero__cta">
            Shop the Haul
          </a>
          <a
            href={buildWhatsAppLink(`Hi! I'd like to order a ${ORIGIN_TAG} kurti from ${SITE_NAME}.`)}
            target="_blank"
            rel="noreferrer"
            className="hero__cta hero__cta--whatsapp"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
