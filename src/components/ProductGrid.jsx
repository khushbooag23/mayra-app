import { products } from '../data/products'
import { buildWhatsAppLink, ORIGIN_TAG } from '../config'
import { useWishlist } from '../context/WishlistContext'

export default function ProductGrid() {
  const { isWishlisted, toggleWishlist } = useWishlist()

  const handlePurchase = (product) => {
    const message = `Hi! I'd like to purchase this ${ORIGIN_TAG} kurti: ${product.title}`
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="grid" id="shop">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="card__image-wrap">
            <span className="card__badge">{ORIGIN_TAG}</span>
            <img src={product.image} alt={product.title} className="card__image" />
            <button
              className={`card__wishlist ${isWishlisted(product.id) ? 'card__wishlist--active' : ''}`}
              aria-label="Add to wishlist"
              onClick={() => toggleWishlist(product.id)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted(product.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.3 4.5 6 4.2c2-.2 3.6 1 5 3 1.4-2 3-3.2 5-3 3.7.3 5.5 3.9 4 7.5-2.5 4.7-10 9.3-10 9.3z" />
              </svg>
            </button>
          </div>
          <p className="card__title">{product.title}</p>
          <button className="card__purchase" onClick={() => handlePurchase(product)}>
            Purchase
          </button>
        </div>
      ))}
    </div>
  )
}
