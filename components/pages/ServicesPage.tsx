'use client'

import { Badge, Box, Button, Container, HStack, Heading, Icon, SimpleGrid, Text, VStack, useColorModeValue, Image, AspectRatio } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowRight, Activity, Heart, Sparkles, Shield, Zap, Clock, Award, CheckCircle, Phone, Users } from 'lucide-react'
import Link from 'next/link'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface ServicesPageProps {
  businessInfo: any
}

export default function ServicesPage({ businessInfo }: ServicesPageProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  
  // Service background colors
  const blueBg = useColorModeValue('blue.50', 'blue.900')
  const pinkBg = useColorModeValue('pink.50', 'pink.900')
  const greenBg = useColorModeValue('green.50', 'green.900')
  const purpleBg = useColorModeValue('purple.50', 'purple.900')
  const orangeBg = useColorModeValue('orange.50', 'orange.900')
  const redBg = useColorModeValue('red.50', 'red.900')
  
  const getColorBg = (color: string) => {
    switch(color) {
      case 'blue.500': return blueBg
      case 'pink.500': return pinkBg
      case 'green.500': return greenBg
      case 'purple.500': return purpleBg
      case 'orange.500': return orangeBg
      case 'red.500': return redBg
      default: return cardBg
    }
  }
  
  const services = [
    {
      icon: Users,
      title: 'Stomatologie Adulți',
      description: 'Servicii complete pentru adulți cu atmosferă caldă și prietenoasă',
      features: ['Consultații complete', 'Tratamente restaurative', 'Îngrijire preventivă', 'Urgențe stomatologice'],
      price: 'Prețuri accesibile $$',
      color: 'blue.500'
    },
    {
      icon: Heart,
      title: 'Stomatologie Copii',
      description: 'Medici care vorbesc frumos cu copiii - eliminăm frica de dentist',
      features: ['Atmosferă prietenoasă pentru copii', 'Tratamente gentle', 'Prevenție dentară', 'Educație pentru igienă'],
      price: 'Special pentru cei mici',
      color: 'pink.500'
    },
    {
      icon: Shield,
      title: 'Ortodonție (Aparate Dentare)',
      description: 'Aparate dentare moderne pentru copii și adulți cu rezultate excelente',
      features: ['Aparate metalice', 'Aparate estetice', 'Corectarea malocluziilor', 'Urmărire specializată'],
      price: 'Planuri de plată flexibile',
      color: 'green.500'
    },
    {
      icon: Activity,
      title: 'Implantologie Dentară',
      description: 'Implanturi dentare de calitate cu satisfacție 100% din partea pacienților',
      features: ['Implanturi premium', 'Chirurgie de precizie', 'Recuperare rapidă', 'Garanție extinsă'],
      price: 'Consultație gratuită',
      color: 'purple.500'
    },
    {
      icon: CheckCircle,
      title: 'Tratamente Preventive',
      description: 'Prevenția - cea mai bună investiție în sănătatea ta dentară',
      features: ['Detartraj profesional', 'Fluorizare', 'Sigilări', 'Consultații regulate'],
      price: 'De la 80 RON',
      color: 'teal.500'
    },
    {
      icon: Award,
      title: 'Servicii Premium',
      description: 'Calitatea care ne-a adus 100% recomandări din partea pacienților',
      features: ['Echipamente moderne', 'Personal amabil', 'Atmosferă relaxantă', 'Rezultate garantate'],
      price: 'Raport calitate-preț excelent',
      color: 'orange.500'
    }
  ]  
  return (
    <Box bg={bgColor} pt="80px">
      {/* Hero Section */}
      <Box bg="linear-gradient(135deg, #4C51BF 0%, #667EEA 50%, #764BA2 100%)" color="white" py={{ base: 16, md: 20 }} minH="60vh" display="flex" alignItems="center">
        <Container maxW="container.xl">
          <MotionVStack
            spacing={6}
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge 
              bg="whiteAlpha.200" 
              color="white" 
              fontSize="md" 
              px={4} 
              py={2}
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              SERVICII COMPLETE
            </Badge>
            <Heading size={{ base: 'xl', md: '2xl' }} maxW="4xl">
              Servicii Stomatologice Complete în Suceava
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" opacity={0.9}>
              Îngrijire completă pentru adulți și copii cu 100% recomandări. 
              Cea mai bună clinică din Suceava cu atmosferă caldă și prietenoasă.
            </Text>
          </MotionVStack>
        </Container>
      </Box>
      
      {/* Services Grid */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {services.map((service, idx) => (
              <MotionBox
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <VStack
                  bg={cardBg}
                  p={8}
                  borderRadius="2xl"
                  spacing={6}
                  h="full"
                  borderWidth={2}
                  borderColor="transparent"
                  _hover={{
                    borderColor: service.color,
                    transform: 'translateY(-8px)',
                    shadow: '2xl'
                  }}
                  transition="all 0.3s"
                  position="relative"
                  overflow="hidden"
                >                  {/* Header */}
                  <VStack spacing={4}>
                    <Box
                      p={4}
                      bg={getColorBg(service.color)}
                      borderRadius="2xl"
                      color={service.color}
                    >
                      <Icon as={service.icon} boxSize={12} />
                    </Box>
                    <VStack spacing={2}>
                      <Heading size="lg" color={headingColor} textAlign="center">
                        {service.title}
                      </Heading>
                      <Text color={textColor} textAlign="center" fontSize="md" lineHeight="tall">
                        {service.description}
                      </Text>
                    </VStack>
                  </VStack>
                  
                  {/* Features */}
                  <VStack align="start" spacing={3} w="full">
                    {service.features.map((feature, featureIdx) => (
                      <HStack key={featureIdx} spacing={3} align="start">
                        <Icon as={CheckCircle} boxSize={5} color="green.500" mt={0.5} />
                        <Text color={textColor} fontSize="sm">
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                  
                  {/* Price and CTA */}
                  <VStack spacing={4} w="full">
                    <Box textAlign="center">
                      <Text fontSize="2xl" fontWeight="bold" color={service.color}>
                        {service.price}
                      </Text>
                      <Text fontSize="sm" color={textColor}>
                        *Preț orientativ, consultația include examinarea completă
                      </Text>
                    </Box>
                    <Button
                      as={Link}
                      href="/contact"
                      colorScheme={service.color.split('.')[0]}
                      size="lg"
                      w="full"
                      rightIcon={<ArrowRight />}
                    >
                      Programează Consultație
                    </Button>
                  </VStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>      
      {/* CTA Section */}
      <Box bg="blue.600" color="white" py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl" textAlign="center">
          <MotionVStack
            spacing={8}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={4}>
              <Heading size={{ base: 'xl', md: '2xl' }}>
                Ai Întrebări Despre Serviciile Noastre?
              </Heading>
              <Text fontSize="xl" maxW="2xl">
                Echipa noastră de specialiști este pregătită să îți răspundă la toate întrebările 
                și să îți ofere consultația de care ai nevoie.
              </Text>
            </VStack>
            
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                bg="white"
                color="blue.600"
                _hover={{ bg: 'gray.100' }}
                leftIcon={<Phone />}
                as="a"
                href={`tel:${businessInfo.phone}`}
              >
                Sună: {businessInfo.phone}
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                onClick={() => onNavigate('contact')}
              >
                Programează Online
              </Button>
            </HStack>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  )
}