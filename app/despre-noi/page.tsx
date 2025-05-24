import AboutPage from '@/components/pages/AboutPage'
import { businessInfo } from '@/lib/business-info'

export default function Despre() {
  return <AboutPage businessInfo={businessInfo} />
}