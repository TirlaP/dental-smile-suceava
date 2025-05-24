'use client'

import { Box, useColorModeValue } from '@chakra-ui/react'
import ScrollingNavbar from '@/components/components/ScrollingNavbar'
import Footer from '@/components/components/Footer'
import { businessInfo } from '@/lib/business-info'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  
  // Map pathnames to page names for backward compatibility
  const getCurrentPage = () => {
    switch (pathname) {
      case '/':
        return 'home'
      case '/servicii':
        return 'services'
      case '/despre-noi':
        return 'about'
      case '/cazuri':
        return 'projects'
      case '/contact':
        return 'contact'
      default:
        return 'home'
    }
  }

  return (
    <Box bg={bgColor} minH="100vh">
      <ScrollingNavbar 
        currentPage={getCurrentPage()} 
        businessInfo={businessInfo}
      />
      
      {children}
      
      <Footer businessInfo={businessInfo} />
    </Box>
  )
}