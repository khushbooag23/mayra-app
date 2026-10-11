import Header from './Header'
import Footer from './Footer'
import ReviewsSection from './ReviewsSection'
import CartDrawer from './CartDrawer'
import WhatsAppButton from './WhatsAppButton'

export default function Layout({ children }) {
  return (
    <div className="page">
      <Header />
      <main className="main">{children}</main>
      {/* <ReviewsSection /> */}
      <Footer />
      <WhatsAppButton />
      <CartDrawer />
    </div>
  )
}
