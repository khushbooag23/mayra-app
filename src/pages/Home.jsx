import Layout from '../components/Layout'
import Hero from '../components/Hero'
import BannerCarousel from '../components/BannerCarousel'
import StayInTouch from '../components/StayInTouch'

export default function Home() {
  return (
    <Layout>
      <Hero />

      <BannerCarousel />

      <StayInTouch />
    </Layout>
  )
}
