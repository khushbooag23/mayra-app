import Layout from '../components/Layout'
import { buildWhatsAppLink, SHOP_DAYS, SHOP_HOURS, ORIGIN_TAG } from '../config'

const faqs = [
  {
    q: 'When is your shop open?',
    a: `Our physical shop is open ${SHOP_DAYS}, ${SHOP_HOURS}. Online orders through WhatsApp are open all week, any day — you don't have to wait for the weekend.`
  },
  {
    q: 'How do I place an order?',
    a: "Click the Purchase button on any kurti you like — it opens WhatsApp with your order details pre-filled so you can confirm with us directly."
  },
  {
    q: 'Are the kurtis really Jaipur made?',
    a: `Yes — every piece is sourced and hand-finished in Jaipur. We're actively taking orders for our latest ${ORIGIN_TAG} collection right now.`
  },
  {
    q: 'What are your delivery options?',
    a: 'We offer express shipping across India. Orders are usually dispatched within 1-2 business days.'
  },
  {
    q: 'Can I exchange a size?',
    a: 'Yes — message us on WhatsApp within 3 days of delivery with your order details and we will arrange a size exchange.'
  },
  {
    q: 'Do you take custom sizing?',
    a: 'Yes, select "Custom Size" from the filters or mention your measurements when you message us.'
  }
]

export default function Support() {
  return (
    <Layout>
      <h1 className="page-title">Support</h1>
      <p className="support__intro">
        Need help with an order, sizing, or anything else? We're just a message away.
      </p>

      <a
        href={buildWhatsAppLink('Hi! I need some support with my Myra order.')}
        target="_blank"
        rel="noreferrer"
        className="support__whatsapp"
      >
        💬 Chat with Support on WhatsApp
      </a>

      <div className="faq">
        {faqs.map((item) => (
          <div className="faq__item" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
