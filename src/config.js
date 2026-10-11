export const SITE_NAME = 'Mayra'
export const LOCATION = "Venkata Living Women's PG"
export const ORIGIN_TAG = 'Jaipur Made'
export const SHOP_DAYS = 'Saturday & Sunday'
export const SHOP_HOURS = '10 AM – 7 PM'

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || ''
export const EMAIL_ID = import.meta.env.VITE_EMAIL_ID || ''
export const GOOGLE_MAP_LINK = import.meta.env.VITE_GOOGLE_MAP_LINK || ''

export function buildWhatsAppLink(message) {
  const base = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : 'https://wa.me/'
  return `${base}?text=${encodeURIComponent(message)}`
}
