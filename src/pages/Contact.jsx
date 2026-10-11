import { useState } from 'react'
import Layout from '../components/Layout'
import { LOCATION, WHATSAPP_NUMBER, EMAIL_ID, SHOP_DAYS, SHOP_HOURS, GOOGLE_MAP_LINK, buildWhatsAppLink } from '../config'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hi, I'm ${form.name} (${form.email}). ${form.message}`
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <Layout>
      <h1 className="page-title">Contact Us</h1>

      <div className="contact">
        <div className="contact__info">
          <h3>Visit / Write to us</h3>
          {GOOGLE_MAP_LINK ? (
            <p>
              📍{' '}
              <a href={GOOGLE_MAP_LINK} target="_blank" rel="noreferrer">
                {LOCATION}
              </a>
            </p>
          ) : (
            <p>📍 {LOCATION}</p>
          )}
          {WHATSAPP_NUMBER && (
            <p>
              💬{' '}
              <a href={buildWhatsAppLink('Hi! I have a question about Mayra.')} target="_blank" rel="noreferrer">
                Chat with us on WhatsApp
              </a>
            </p>
          )}
          {EMAIL_ID && (
            <p>
              ✉️ <a href={`mailto:${EMAIL_ID}`}>{EMAIL_ID}</a>
            </p>
          )}
          <p>💬 WhatsApp orders accepted all week</p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="card__purchase">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </Layout>
  )
}
