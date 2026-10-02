import { useState } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import ProductGrid from '../components/ProductGrid'
import { ORIGIN_TAG } from '../config'

export default function Home() {
  const [selectedSizes, setSelectedSizes] = useState([])

  const toggleSize = (key) => {
    setSelectedSizes((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]
    )
  }

  return (
    <Layout>
      <Hero />

      <h2 className="page-title">New Arrivals — {ORIGIN_TAG} Kurti Haul</h2>

      <div className="toolbar">
        <span />
        <select className="sort-select" defaultValue="featured">
          <option value="featured">Sort</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div className="content">
        <Sidebar selectedSizes={selectedSizes} onToggleSize={toggleSize} />
        <ProductGrid />
      </div>
    </Layout>
  )
}
