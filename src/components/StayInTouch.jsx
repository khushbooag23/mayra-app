import { useState } from 'react'

const encode = (data) => new URLSearchParams(data).toString()

export default function StayInTouch() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', consent: false })
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'stay-in-touch',
          name: form.name,
          phone: form.phone,
          email: form.email
        })
      })
      if (!res.ok) throw new Error('Submit failed')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <section className="touch">
        <h2>Thank you! 💌</h2>
        <p>We'll reach out with new drops and offers.</p>
      </section>
    )
  }

  return (
    <section className="touch">
      <h2>Stay in touch ✨</h2>
      <p>Get new Jaipur kurti drops first. Leave your details and we'll contact you.</p>
      <form className="touch__form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required maxLength={60} />
        <input name="phone" type="tel" placeholder="WhatsApp number" value={form.phone} onChange={handleChange} required pattern="[0-9+\s\-]{8,15}" />
        <input name="email" type="email" placeholder="Email (optional)" value={form.email} onChange={handleChange} />
        <label className="touch__consent">
          <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
          I agree to be contacted about Mayra offers and orders.
        </label>
        <button type="submit" className="card__purchase" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Keep me updated'}
        </button>
        {status === 'error' && <p className="touch__error">Something went wrong — please try again or message us on WhatsApp.</p>}
      </form>
    </section>
  )
}
