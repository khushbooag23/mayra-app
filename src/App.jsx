import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import WelcomePopup from './components/WelcomePopup'

const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))
const Support = lazy(() => import('./pages/Support'))
const Reviews = lazy(() => import('./pages/Reviews'))

export default function App() {
  return (
    <>
      <WelcomePopup />
      <Suspense fallback={<div className="route-loading">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* Any unknown path falls back to Home, so there is always a valid landing endpoint. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}
