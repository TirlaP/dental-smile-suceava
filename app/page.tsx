import HomePage from '@/components/pages/HomePage'
import { businessInfo } from '@/lib/business-info'

export default function Home() {
  return <HomePage businessInfo={businessInfo} />
}