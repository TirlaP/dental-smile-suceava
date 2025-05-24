'use client'

import { HStack, Button, Text, Box, Show, Flex, useColorModeValue } from '@chakra-ui/react'
import { Phone, Activity } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NavigationProps {
  currentPage: string
  businessInfo: any
}

export default function Navigation({ currentPage, businessInfo }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pages = [
    { id: 'home', label: 'Acasă', href: '/' },
    { id: 'services', label: 'Servicii', href: '/servicii' },
    { id: 'about', label: 'Despre Noi', href: '/despre-noi' },
    { id: 'projects', label: 'Cazuri', href: '/cazuri' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ]
  
  // On homepage: white text when not scrolled, dark when scrolled
  // On other pages: always dark
  const shouldUseLightColors = currentPage === 'home' && !isScrolled
  
  // Always call hooks unconditionally
  const darkModeLogoColor = useColorModeValue('gray.800', 'white')
  const darkModeNavColor = useColorModeValue('gray.700', 'gray.300')
  const darkModeNavHoverColor = useColorModeValue('blue.600', 'blue.400')
  const darkModeActiveColor = useColorModeValue('blue.600', 'blue.400')
  
  // Then apply conditional logic
  const logoTextColor = shouldUseLightColors ? 'white' : darkModeLogoColor
  const navTextColor = shouldUseLightColors ? 'whiteAlpha.900' : darkModeNavColor
  const navTextHoverColor = shouldUseLightColors ? 'white' : darkModeNavHoverColor
  const activeNavColor = shouldUseLightColors ? 'white' : darkModeActiveColor

  return (
    <Flex w="full" justify="space-between" align="center">
      {/* Logo */}
      <HStack 
        as={Link} 
        href="/" 
        spacing={3} 
        cursor="pointer"
        _hover={{ textDecoration: 'none' }}
      >
        <Box
          p={2}
          bg={shouldUseLightColors ? "whiteAlpha.200" : "blue.500"}
          borderRadius="lg"
          color="white"
          backdropFilter={shouldUseLightColors ? "blur(10px)" : "none"}
          border={shouldUseLightColors ? "1px solid" : "none"}
          borderColor={shouldUseLightColors ? "whiteAlpha.300" : "transparent"}
          transition="all 0.3s"
        >
          <Activity size={28} />
        </Box>
        <Box>
          <Text 
            fontWeight="bold" 
            fontSize="xl" 
            lineHeight="short" 
            color={logoTextColor}
            transition="color 0.3s"
          >
            {businessInfo.name.split(' ').slice(0, 1).join(' ')}
          </Text>
          <Text 
            fontSize="xs" 
            color={shouldUseLightColors ? "whiteAlpha.800" : "gray.500"} 
            fontWeight="medium" 
            maxW="200px" 
            noOfLines={1}
            transition="color 0.3s"
          >
            {businessInfo.tagline}
          </Text>
        </Box>
      </HStack>      
      
      {/* Desktop Navigation */}
      <Show above="md">
        <HStack spacing={1}>
          {pages.map((page) => (
            <Button
              key={page.id}
              as={Link}
              href={page.href}
              variant="ghost"
              size="sm"
              fontWeight={currentPage === page.id ? 'bold' : 'medium'}
              color={currentPage === page.id ? activeNavColor : navTextColor}
              _hover={{ 
                color: navTextHoverColor, 
                bg: shouldUseLightColors ? 'whiteAlpha.200' : 'blue.50',
                backdropFilter: shouldUseLightColors ? 'blur(10px)' : 'none'
              }}
              position="relative"
              transition="all 0.3s"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                bg: activeNavColor,
                transform: currentPage === page.id ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.2s',
                transformOrigin: 'center'
              }}
            >
              {page.label}
            </Button>
          ))}
        </HStack>
        
        {/* CTA Button */}
        <Button
          colorScheme={shouldUseLightColors ? 'whiteAlpha' : 'blue'}
          variant={shouldUseLightColors ? 'outline' : 'solid'}
          size="sm"
          leftIcon={<Phone size={16} />}
          as="a"
          href={`tel:${businessInfo.phone}`}
          borderColor={shouldUseLightColors ? "whiteAlpha.400" : "transparent"}
          backdropFilter={shouldUseLightColors ? "blur(10px)" : "none"}
          _hover={{
            transform: 'translateY(-1px)',
            boxShadow: shouldUseLightColors ? '0 4px 20px rgba(255,255,255,0.2)' : 'md'
          }}
          transition="all 0.3s"
        >
          Programare: {businessInfo.phone}
        </Button>
      </Show>
    </Flex>
  )
}