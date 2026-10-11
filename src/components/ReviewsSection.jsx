import { Link } from 'react-router-dom'
import { useReviews } from '../context/ReviewsContext'

export function Stars({ rating }) {
  return (
    <span className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </span>
  )
}

export default function ReviewsSection() {
  const { reviews } = useReviews()

  return (
    <section className="reviews">
      <h2 className="reviews__title">💖 What our customers say</h2>
      {reviews.length === 0 ? (
        <p className="reviews__empty">No reviews yet — be the first!</p>
      ) : (
        <div className="reviews__list">
          {reviews.map((r) => (
            <figure className="review-card" key={r.id}>
              <Stars rating={r.rating} />
              <blockquote>“{r.text}”</blockquote>
              <figcaption>— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      )}
      <Link to="/reviews" className="reviews__cta">Leave a review</Link>
    </section>
  )
}
