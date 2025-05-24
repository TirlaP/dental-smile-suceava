'use client'

import { Badge, Box, Button, Container, Divider, Flex, HStack, Icon, IconButton, Input, Link as ChakraLink, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { Activity, Award, CheckCircle, Clock, Facebook, Heart, Instagram, Mail, MapPin, Phone, Send, Shield } from 'lucide-react'
import Link from 'next/link'

interface FooterProps {
  businessInfo: any
}

export default function Footer({ businessInfo }: FooterProps) {
  const bgColor = useColorModeValue('gray.900', 'gray.900')
  const textColor = useColorModeValue('gray.300', 'gray.300')
  const headingColor = useColorModeValue('white', 'white')
  const linkHoverColor = useColorModeValue('blue.400', 'blue.400')
  const borderColor = useColorModeValue('gray.700', 'gray.700')
  
  const currentYear = new Date().getFullYear()
  
  const services = [
    'Urgențe Stomatologice',
    'Implantologie Dentară',
    'Ortodonție',
    'Estetica Dentară',
    'Paradontologie',
    'Endodonție'
  ]
  
  const popularServices = [
    'Albire Dentară',
    'Plombe Estetice',
    'Proteze Mobile',
    'Igienizare Profesională'
  ]
  
  const quickLinks = [
    { name: 'Acasă', href: '/' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Despre Noi', href: '/despre-noi' },
    { name: 'Cazuri', href: '/cazuri' },
    { name: 'Contact', href: '/contact' }
  ]  
  return (
    <Box bg={bgColor} color={textColor}>
      {/* Newsletter Section */}
      <Box bg="blue.600" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={4}>
            <Text fontSize="2xl" fontWeight="bold" color="white" textAlign="center">
              Abonează-te la Newsletter
            </Text>
            <Text color="blue.100" textAlign="center">
              Primește sfaturi de îngrijire dentară și oferte exclusive
            </Text>
            <Flex 
              direction={{ base: 'column', sm: 'row' }} 
              maxW="md" 
              w="full" 
              gap={{ base: 3, sm: 0 }}
            >
              <Input
                placeholder="Adresa ta de email"
                bg="white"
                color="gray.900"
                _placeholder={{ color: 'gray.500' }}
                size="lg"
                borderRightRadius={{ base: 'md', sm: 0 }}
              />
              <Button
                size="lg"
                colorScheme="orange"
                rightIcon={<Send size={18} />}
                borderLeftRadius={{ base: 'md', sm: 0 }}
                w={{ base: 'full', sm: 'auto' }}
              >
                Abonează-te
              </Button>
            </Flex>
            <Text fontSize="xs" color="blue.100">
              Prin abonare, ești de acord cu Politica de Confidențialitate și procesarea datelor conform GDPR
            </Text>
          </VStack>
        </Container>
      </Box>
      
      {/* Main Footer Content */}
      <Container maxW="container.xl" py={{ base: 8, md: 12, lg: 16 }}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={{ base: 6, md: 8 }}>
          {/* Company Info */}
          <VStack align="start" spacing={4}>
            <HStack spacing={3} mb={2}>
              <Box
                p={2}
                bg="blue.500"
                borderRadius="lg"
                color="white"
              >
                <Activity size={24} />
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                  {businessInfo.name.split(' ').slice(0, 1).join(' ')}
                </Text>
                <Text fontSize="xs" color={textColor}>
                  Cabinet stomatologic din 2013
                </Text>
              </Box>
            </HStack>            <Text fontSize="sm" lineHeight="tall">
              Cabinet stomatologic modern cu echipamente de ultimă generație. Oferim servicii complete de îngrijire dentară.
            </Text>
            <Button
              size="sm"
              colorScheme="blue"
              leftIcon={<Phone size={16} />}
              as="a"
              href={`tel:${businessInfo.phone}`}
            >
              Programări: {businessInfo.phone}
            </Button>
            
            {/* Certifications */}
            <VStack align="start" spacing={2} pt={2}>
              <HStack spacing={2}>
                <Icon as={Shield} boxSize={4} color="green.400" />
                <Text fontSize="xs">Autorizat Ministerul Sănătății</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={Award} boxSize={4} color="green.400" />
                <Text fontSize="xs">Membru CMR</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={CheckCircle} boxSize={4} color="green.400" />
                <Text fontSize="xs">Asigurare Malpractice</Text>
              </HStack>
            </VStack>
          </VStack>
          
          {/* Quick Links */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="semibold" fontSize="lg" color={headingColor} mb={2}>
              Linkuri Rapide
            </Text>
            {quickLinks.map((link) => (
              <ChakraLink
                key={link.name}
                as={Link}
                href={link.href}
                fontSize="sm"
                color={textColor}
                _hover={{ color: linkHoverColor, textDecoration: 'none' }}
                cursor="pointer"
                display="flex"
                alignItems="center"
                gap={1}
              >
                {link.name}
              </ChakraLink>
            ))}
            <Divider borderColor={borderColor} my={2} />
            <ChakraLink
              fontSize="sm"
              color={textColor}
              _hover={{ color: linkHoverColor }}
              href="#"
            >
              Cariere
            </ChakraLink>
            <ChakraLink
              fontSize="sm"
              color={textColor}
              _hover={{ color: linkHoverColor }}
              href="#"
            >
              Blog
            </ChakraLink>
          </VStack>          
          {/* Services */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="semibold" fontSize="lg" color={headingColor} mb={2}>
              Serviciile Noastre
            </Text>
            {services.map((service) => (
              <ChakraLink
                key={service}
                as={Link}
                href="/servicii"
                fontSize="sm"
                color={textColor}
                _hover={{ color: linkHoverColor, textDecoration: 'none' }}
                cursor="pointer"
              >
                {service}
              </ChakraLink>
            ))}
          </VStack>
          
          {/* Popular Services */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="semibold" fontSize="lg" color={headingColor} mb={2}>
              Servicii Populare
            </Text>
            {popularServices.map((service) => (
              <ChakraLink
                key={service}
                as={Link}
                href="/servicii"
                fontSize="sm"
                color={textColor}
                _hover={{ color: linkHoverColor, textDecoration: 'none' }}
                cursor="pointer"
              >
                {service}
              </ChakraLink>
            ))}
            <Divider borderColor={borderColor} my={2} />
            <Text fontWeight="semibold" fontSize="sm" color={headingColor}>
              Metode de Plată
            </Text>
            <HStack spacing={2} flexWrap="wrap">
              <Badge colorScheme="blue" fontSize="xs">Numerar</Badge>
              <Badge colorScheme="blue" fontSize="xs">Card</Badge>
              <Badge colorScheme="blue" fontSize="xs">Transfer</Badge>
              <Badge colorScheme="blue" fontSize="xs">Rate</Badge>
            </HStack>
          </VStack>          
          {/* Contact Info */}
          <VStack align="start" spacing={3}>
            <Text fontWeight="semibold" fontSize="lg" color={headingColor} mb={2}>
              Informații Contact
            </Text>
            <VStack align="start" spacing={3} fontSize="sm">
              <HStack spacing={2}>
                <Icon as={Phone} boxSize={4} color="blue.400" />
                <VStack align="start" spacing={0}>
                  <ChakraLink href={`tel:${businessInfo.phone}`} _hover={{ color: linkHoverColor }}>
                    {businessInfo.phone}
                  </ChakraLink>
                  <Text fontSize="xs" color="orange.400">Programări și Urgențe</Text>
                </VStack>
              </HStack>
              <HStack spacing={2}>
                <Icon as={Mail} boxSize={4} color="blue.400" />
                <ChakraLink href={`mailto:${businessInfo.email}`} _hover={{ color: linkHoverColor }}>
                  {businessInfo.email}
                </ChakraLink>
              </HStack>
              <HStack spacing={2} align="start">
                <Icon as={MapPin} boxSize={4} color="blue.400" mt={0.5} />
                <Text>
                  {businessInfo.address}<br />
                  {businessInfo.city}, {businessInfo.state} {businessInfo.zipCode}
                </Text>
              </HStack>
              <HStack spacing={2} align="start">
                <Icon as={Clock} boxSize={4} color="blue.400" mt={0.5} />
                <VStack align="start" spacing={0}>
                  <Text>Luni-Vineri: 09:00-19:00</Text>
                  <Text>Sâmbătă: 10:00-15:00</Text>
                  <Text>Duminică: Închis</Text>
                </VStack>
              </HStack>
            </VStack>
            
            {/* Social Media */}
            <Text fontWeight="semibold" fontSize="sm" color={headingColor} pt={2}>
              Urmărește-ne
            </Text>
            <HStack spacing={2}>
              <IconButton
                as="a"
                href={businessInfo.socialMedia.facebook}
                target="_blank"
                aria-label="Facebook"
                icon={<Facebook size={18} />}
                size="sm"
                colorScheme="facebook"
                variant="ghost"
                _hover={{ bg: 'blue.900' }}
              />              <IconButton
                as="a"
                href={businessInfo.socialMedia.instagram}
                target="_blank"
                aria-label="Instagram"
                icon={<Instagram size={18} />}
                size="sm"
                colorScheme="pink"
                variant="ghost"
                _hover={{ bg: 'pink.900' }}
              />
              {/* <IconButton
                as="a"
                href={`https://twitter.com/${businessInfo.socialMedia.twitter.replace('@', '')}`}
                target="_blank"
                aria-label="Twitter"
                icon={<Twitter size={18} />}
                size="sm"
                colorScheme="twitter"
                variant="ghost"
                _hover={{ bg: 'blue.900' }}
              />
              <IconButton
                as="a"
                href={businessInfo.socialMedia.youtube}
                target="_blank"
                aria-label="YouTube"
                icon={<Youtube size={18} />}
                size="sm"
                colorScheme="red"
                variant="ghost"
                _hover={{ bg: 'red.900' }}
              /> */}
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>
      
      {/* Bottom Bar */}
      <Box borderTopWidth={1} borderColor={borderColor}>
        <Container maxW="container.xl" py={6}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <VStack align={{ base: 'center', md: 'start' }} spacing={2}>
              <Text fontSize="sm">
                © {currentYear} {businessInfo.name}. Toate drepturile rezervate.
              </Text>
              <Text fontSize="xs" color="gray.500">
                CUI: RO98765432 | Nr. Reg. Com.: J40/5678/2013
              </Text>
            </VStack>            
            <HStack spacing={4} fontSize="sm" flexWrap="wrap" justify="center">
              <ChakraLink href="#" _hover={{ color: linkHoverColor }}>Politica de Confidențialitate</ChakraLink>
              <Text>•</Text>
              <ChakraLink href="#" _hover={{ color: linkHoverColor }}>Termeni și Condiții</ChakraLink>
              <Text>•</Text>
              <ChakraLink href="#" _hover={{ color: linkHoverColor }}>Politica Cookie</ChakraLink>
              <Text>•</Text>
              <ChakraLink href="#" _hover={{ color: linkHoverColor }}>ANPC</ChakraLink>
              <Text>•</Text>
              <ChakraLink href="#" _hover={{ color: linkHoverColor }}>Hartă Site</ChakraLink>
            </HStack>
            
            <HStack spacing={1} fontSize="xs" color="gray.500">
              <Text>Dezvoltat cu</Text>
              <Icon as={Heart} boxSize={3} color="red.400" />
              <Text>în România</Text>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}