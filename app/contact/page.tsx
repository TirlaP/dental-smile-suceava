import ContactPage from '@/components/pages/ContactPage'
import { businessInfo } from '@/lib/business-info'

export default function Contact() {
  return <ContactPage businessInfo={businessInfo} />
}