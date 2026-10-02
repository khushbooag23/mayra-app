export const sizes = [
  { label: 'XS', count: 12 },
  { label: 'S', count: 18 },
  { label: 'M', count: 24 },
  { label: 'L', count: 24 },
  { label: 'XL', count: 20 },
  { label: 'XXL', count: 14 },
  { label: 'Custom Size', count: 8 }
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'New Arrivals', to: '/' },
  { label: 'Contact', to: '/contact' },
  { label: 'Support', to: '/support' }
]

export const products = [
  { id: 1, title: 'Wine Floral Printed Straight Kurti', color: 'b1434a' },
  { id: 2, title: 'Plum Printed Angrakha Kurti', color: '6d2f5c' },
  { id: 3, title: 'Teal Printed Angrakha Kurti', color: '1f7a8c' },
  { id: 4, title: 'Red Print Anarkali Kurti', color: 'a13438' },
  { id: 5, title: 'Mustard Block Print A-Line Kurti', color: 'b8862b' },
  { id: 6, title: 'Olive Embroidered Straight Kurti', color: '556b2f' },
  { id: 7, title: 'Pink Floral Flared Kurti', color: 'c9557a' },
  { id: 8, title: 'Indigo Hand-Block Printed Kurti', color: '2f4f6d' }
].map((p) => ({
  ...p,
  image: `https://placehold.co/400x560/${p.color}/f5e9df?font=playfair-display&text=${encodeURIComponent(
    p.title.split(' ').slice(0, 2).join(' ')
  )}`
}))
