import { SITE_NAME, buildWhatsAppLink } from '../config'

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(`Hi! I'm checking out ${SITE_NAME} and have a question.`)}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-fab__ring" />
      <WhatsAppIcon />
      <span className="whatsapp-fab__tooltip">Chat with us</span>
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.01 2.67C8.65 2.67 2.68 8.63 2.68 16c0 2.62.75 5.06 2.05 7.14L2.67 29.3l6.35-1.99a13.26 13.26 0 0 0 7 1.89c7.36 0 13.33-5.96 13.33-13.33S23.37 2.67 16.01 2.67zm0 24.1c-2.22 0-4.3-.63-6.06-1.72l-.44-.26-4.21 1.32 1.35-4.1-.28-.44a10.87 10.87 0 0 1-1.69-5.57c0-6.03 4.9-10.93 10.93-10.93 2.92 0 5.66 1.14 7.73 3.2a10.86 10.86 0 0 1 3.2 7.73c0 6.03-4.9 10.77-10.93 10.77zm5.98-8.18c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.73.16-.22.33-.84 1.06-1.03 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.51-2.63-1.62-.97-.86-1.63-1.93-1.82-2.26-.19-.33-.02-.5.15-.68.15-.16.33-.41.5-.62.17-.2.22-.35.33-.57.11-.22.05-.41-.04-.57-.09-.16-.76-1.83-1.04-2.5-.28-.67-.57-.58-.78-.58-.19 0-.41-.02-.63-.02-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.72s1.17 3.16 1.33 3.38c.17.22 2.26 3.44 5.48 4.69 3.22 1.25 3.22.84 3.8.78.58-.05 1.93-.79 2.2-1.55.27-.76.27-1.42.19-1.56-.08-.14-.3-.22-.63-.38z" />
    </svg>
  )
}
