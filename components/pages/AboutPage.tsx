'use client'

import { Badge, Box, Button, Container, HStack, Heading, Icon, SimpleGrid, Text, VStack, useColorModeValue, AspectRatio, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Heart, Shield, Star, CheckCircle, Stethoscope, GraduationCap, Building } from 'lucide-react'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface AboutPageProps {
  businessInfo: any
}

export default function AboutPage({ businessInfo }: AboutPageProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const headingColor = useColorModeValue('gray.800', 'white')
  const cardBg = useColorModeValue('gray.50', 'gray.700')
  
  const stats = [
    { number: '100%', label: 'Recomandă Clinica', icon: Users },
    { number: '69', label: 'Recenzii Perfecte', icon: Heart },
    { number: '#1', label: 'Clinică în Suceava', icon: Award },
    { number: '$$', label: 'Prețuri Accesibile', icon: Shield }
  ]
  
  const team = [
    {
      name: 'Echipa Stomatologie Adulți',
      specialty: 'Specialiști pentru Adulți',
      experience: 'Experiență în servicii complete',
      education: 'Formare continuă în stomatologie modernă',
      specializations: ['Implantologie dentară', 'Tratamente complexe', 'Îngrijire preventivă']
    },
    {
      name: 'Echipa Stomatologie Copii',
      specialty: 'Specialiști Pediatrici',
      experience: 'Experți în îngrijirea copiilor',
      education: 'Medici care "vorbesc frumos cu copiii"',
      specializations: ['Stomatologie pediatrică', 'Eliminarea fricii', 'Tratamente gentle']
    },
    {
      name: 'Echipa Ortodonție',
      specialty: 'Aparate Dentare',
      experience: 'Specialiști în ortodonție',
      education: 'Experiență în corectarea malocluziilor',
      specializations: ['Aparate dentare moderne', 'Ortodonție copii și adulți', 'Rezultate garantate']
    }
  ]  
  const values = [
    {
      icon: Heart,
      title: 'Atmosferă Caldă și Prietenoasă',
      description: 'Căldura și prietenia cu care se începe și se încheie orice vizită - loc foarte primitor'
    },
    {
      icon: Award,
      title: 'Cea Mai Bună Clinică din Suceava',
      description: 'Una dintre cele mai bune clinici din Suceava cu 100% recomandări din partea pacienților'
    },
    {
      icon: Shield,
      title: 'Eliminăm Frica de Dentist',
      description: 'Te ajutăm să spui "pa-pa" fricii de dentist printr-o abordare blândă și profesionistă'
    },
    {
      icon: Users,
      title: 'Excelent cu Copiii',
      description: 'Medici care vorbesc frumos cu copiii - atmosferă prietenoasă pentru întreaga familie'
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
              DESPRE NOI
            </Badge>
            <Heading size={{ base: 'xl', md: '2xl' }} maxW="4xl">
              Echipa Ta de Încredere pentru Sănătatea Dentară
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" opacity={0.9}>
              Cu peste 12 ani de experiență și mii de pacienți mulțumiți, suntem dedicați să oferim 
              cea mai bună îngrijire stomatologică în București.
            </Text>
          </MotionVStack>
        </Container>
      </Box>      
      {/* Stats Section */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            {stats.map((stat, idx) => (
              <MotionBox
                key={idx}
                textAlign="center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <VStack spacing={4}>
                  <Box
                    p={4}
                    bg="blue.500"
                    borderRadius="2xl"
                    color="white"
                  >
                    <Icon as={stat.icon} boxSize={8} />
                  </Box>
                  <VStack spacing={1}>
                    <Text fontSize="3xl" fontWeight="bold" color={headingColor}>
                      {stat.number}
                    </Text>
                    <Text color={textColor} fontWeight="medium">
                      {stat.label}
                    </Text>
                  </VStack>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      
      {/* Team Section */}
      <Box bg={cardBg} py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <MotionVStack
            spacing={12}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={4} textAlign="center">
              <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
                ECHIPA MEDICALĂ
              </Badge>
              <Heading size="xl" color={headingColor}>
                Medicii Noștri Specialiști
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl">
                Echipa noastră este formată din medici cu experiență vastă, 
                în permanentă actualizare cu cele mai noi tehnici și tehnologii.
              </Text>
            </VStack>            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {team.map((member, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <VStack
                    bg={bgColor}
                    p={8}
                    borderRadius="2xl"
                    spacing={6}
                    borderWidth={1}
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                    _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
                    transition="all 0.3s"
                  >
                    <VStack spacing={4}>
                      <Box
                        w={20}
                        h={20}
                        bg="blue.500"
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                      >
                        <Icon as={Stethoscope} boxSize={10} />
                      </Box>
                      <VStack spacing={2} textAlign="center">
                        <Heading size="md" color={headingColor}>
                          {member.name}
                        </Heading>
                        <Text color="blue.500" fontWeight="semibold">
                          {member.specialty}
                        </Text>
                        <Text fontSize="sm" color={textColor}>
                          {member.experience}
                        </Text>
                      </VStack>
                    </VStack>
                    
                    <VStack spacing={3} w="full">
                      <HStack spacing={2}>
                        <Icon as={GraduationCap} boxSize={4} color="blue.500" />
                        <Text fontSize="sm" color={textColor}>
                          {member.education}
                        </Text>
                      </HStack>
                      <VStack align="start" spacing={2} w="full">
                        <Text fontSize="sm" fontWeight="semibold" color={headingColor}>
                          Specializări:
                        </Text>
                        {member.specializations.map((spec, specIdx) => (
                          <HStack key={specIdx} spacing={2}>
                            <Icon as={CheckCircle} boxSize={3} color="green.500" />
                            <Text fontSize="sm" color={textColor}>
                              {spec}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </VStack>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionVStack>
        </Container>
      </Box>      
      {/* Values Section */}
      <Box py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <MotionVStack
            spacing={12}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={4} textAlign="center">
              <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
                VALORILE NOASTRE
              </Badge>
              <Heading size="xl" color={headingColor}>
                Principiile Care Ne Ghidează
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl">
                Fiecare decizie pe care o luăm este ghidată de aceste valori fundamentale 
                care definesc modul în care îngrijim pacienții noștri.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {values.map((value, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Flex
                    bg={cardBg}
                    p={8}
                    borderRadius="2xl"
                    borderWidth={1}
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                    _hover={{ shadow: 'lg' }}
                    transition="all 0.3s"
                  >
                    <HStack align="start" spacing={6}>
                      <Box
                        p={3}
                        bg="blue.500"
                        borderRadius="xl"
                        color="white"
                        flexShrink={0}
                      >
                        <Icon as={value.icon} boxSize={6} />
                      </Box>
                      <VStack align="start" spacing={3}>
                        <Heading size="md" color={headingColor}>
                          {value.title}
                        </Heading>
                        <Text color={textColor} lineHeight="tall">
                          {value.description}
                        </Text>
                      </VStack>
                    </HStack>
                  </Flex>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionVStack>
        </Container>
      </Box>
    </Box>
  )
}