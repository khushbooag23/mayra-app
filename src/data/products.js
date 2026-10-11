import kurti1 from '../images/Mayra_A4_1_emerald.png'
import kurti2 from '../images/Mayra_A4_2_maroon.png'
import kurti3 from '../images/Mayra_A4_3_teal.png'
import banner1 from '../images/Mayra_banner_1_emerald.png'
import banner2 from '../images/Mayra_banner_2_maroon.png'
import banner3 from '../images/Mayra_banner_3_teal.png'

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Contact', to: '/contact' },
  { label: 'Support', to: '/support' },
  { label: 'Reviews', to: '/reviews' }
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

export const kurtiLinks = [
  { id: 1, title: 'Emerald Kurti', image: kurti1 },
  { id: 2, title: 'Maroon Kurti', image: kurti2 },
  { id: 3, title: 'Teal Kurti', image: kurti3 }
]

export const banners = [
  { id: 1, title: 'Kurtis for pretty girls', image: banner1 },
  { id: 2, title: 'Kurtis for beautiful girls', image: banner2 },
  { id: 3, title: 'Kurtis for gorgeous girls', image: banner3 }
]
