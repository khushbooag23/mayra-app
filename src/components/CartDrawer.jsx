import { useCart } from '../context/CartContext'
import { SITE_NAME, ORIGIN_TAG, buildWhatsAppLink } from '../config'

export default function CartDrawer() {
  const { items, isOpen, closeCart, changeQty, removeItem } = useCart()

  if (!isOpen) return null

  const handleCheckout = () => {
    const lines = items.map((i, n) => `${n + 1}. ${i.title} × ${i.qty}`)
    const message = `Hi! I'd like to order these ${ORIGIN_TAG} kurtis from ${SITE_NAME}:\n${lines.join('\n')}`
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
    closeCart()
  }

  return (
    <div className="cart-overlay" onClick={closeCart}>
      <aside className="cart" role="dialog" aria-label="Your cart" onClick={(e) => e.stopPropagation()}>
        <div className="cart__head">
          <h2>Your Cart</h2>
          <button className="cart__close" aria-label="Close cart" onClick={closeCart}>×</button>
        </div>

        {items.length === 0 ? (
          <p className="cart__empty">Your cart is empty. Add a kurti to get started.</p>
        ) : (
          <>
            <ul className="cart__list">
              {items.map((item) => (
                <li className="cart__item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="cart__info">
                    <p>{item.title}</p>
                    <div className="cart__qty">
                      <button aria-label="Decrease quantity" onClick={() => changeQty(item.id, -1)}>−</button>
                      <span>{item.qty}</span>
                      <button aria-label="Increase quantity" onClick={() => changeQty(item.id, 1)}>+</button>
                      <button className="cart__remove" onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="card__purchase" onClick={handleCheckout}>
              Checkout on WhatsApp
            </button>
          </>
        )}
      </aside>
    </div>
  )
}
