'use client'

import React from 'react'
import { Box, useColorModeValue, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Button, IconButton, Hide } from '@chakra-ui/react'
import ScrollingNavbar from '@/components/components/ScrollingNavbar'
import Footer from '@/components/components/Footer'
import { businessInfo } from '@/lib/business-info'
import { usePathname, useRouter } from 'next/navigation'
import { Menu } from 'lucide-react'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isScrolled, setIsScrolled] = React.useState(false)
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
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
  
  const handleNavigation = (href: string) => {
    router.push(href)
    onClose()
  }

  return (
    <Box bg={bgColor} minH="100vh">
      <ScrollingNavbar 
        currentPage={getCurrentPage()} 
        businessInfo={businessInfo}
      >
        {/* Mobile Menu Button */}
        <Hide above="md">
          <IconButton
            aria-label="Open menu"
            icon={<Menu />}
            onClick={onOpen}
            variant="ghost"
            color={getCurrentPage() === 'home' && !isScrolled ? 'white' : 'gray.600'}
            _hover={{ bg: getCurrentPage() === 'home' && !isScrolled ? 'whiteAlpha.200' : 'gray.100' }}
          />
        </Hide>
      </ScrollingNavbar>
      
      {children}
      
      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{businessInfo.name}</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Button
                variant={pathname === '/' ? 'solid' : 'ghost'}
                colorScheme={pathname === '/' ? 'blue' : 'gray'}
                onClick={() => handleNavigation('/')}
              >
                Acasă
              </Button>
              <Button
                variant={pathname === '/servicii' ? 'solid' : 'ghost'}
                colorScheme={pathname === '/servicii' ? 'blue' : 'gray'}
                onClick={() => handleNavigation('/servicii')}
              >
                Servicii
              </Button>
              <Button
                variant={pathname === '/despre-noi' ? 'solid' : 'ghost'}
                colorScheme={pathname === '/despre-noi' ? 'blue' : 'gray'}
                onClick={() => handleNavigation('/despre-noi')}
              >
                Despre Noi
              </Button>
              <Button
                variant={pathname === '/cazuri' ? 'solid' : 'ghost'}
                colorScheme={pathname === '/cazuri' ? 'blue' : 'gray'}
                onClick={() => handleNavigation('/cazuri')}
              >
                Cazuri
              </Button>
              <Button
                variant={pathname === '/contact' ? 'solid' : 'ghost'}
                colorScheme={pathname === '/contact' ? 'blue' : 'gray'}
                onClick={() => handleNavigation('/contact')}
              >
                Contact
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      
      <Footer businessInfo={businessInfo} />
    </Box>
  )
}