import { useEffect, useState } from 'react'
import { banners } from '../data/products'
import { SITE_NAME, buildWhatsAppLink } from '../config'

export default function BannerCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (banners.length < 2) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % banners.length), 4000)
    return () => clearInterval(timer)
  }, [])

  if (banners.length === 0) return null

  return (
    <section className="banners" id="shop" aria-label="Offers and banners">
      <div className="banners__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {banners.map((banner) => (
          <a
            key={banner.id}
            className="banners__slide"
            href={buildWhatsAppLink(`Hi! I saw "${banner.title}" on ${SITE_NAME} and I'd like to shop.`)}
            target="_blank"
            rel="noreferrer"
          >
            <img src={banner.image} alt={banner.title} className="banners__img" />
            <span className="banners__cta">Shop Now on WhatsApp</span>
          </a>
        ))}
      </div>
      {banners.length > 1 && (
        <div className="banners__dots">
          {banners.map((banner, i) => (
            <button
              key={banner.id}
              className={`banners__dot ${i === index ? 'banners__dot--active' : ''}`}
              aria-label={`Show ${banner.title}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
