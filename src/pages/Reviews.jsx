import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { useReviews } from '../context/ReviewsContext'

export default function Reviews() {
  const { addReview } = useReviews()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', rating: 5, text: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addReview({ ...form, rating: Number(form.rating) })
    navigate('/')
    setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100)
  }

  return (
    <Layout>
      <h1 className="page-title">Leave a Review</h1>
      <form className="contact__form review-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input name="name" value={form.name} onChange={handleChange} required maxLength={40} />
        </label>
        <label>
          Rating
          <select name="rating" value={form.rating} onChange={handleChange}>
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>{'★'.repeat(n)} ({n})</option>
            ))}
          </select>
        </label>
        <label>
          Your review
          <textarea name="text" rows="4" value={form.text} onChange={handleChange} required maxLength={300} />
        </label>
        <button type="submit" className="card__purchase">Submit review</button>
      </form>
    </Layout>
  )
}
