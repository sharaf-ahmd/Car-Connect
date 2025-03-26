import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Center } from '@chakra-ui/react';
import { Users, Target, Heart } from 'lucide-react';
import Sharaf from '/CarRepairImages/sharaf.jpeg'
import ahamed from '/CarRepairImages/Ahamed.jpeg'
import Rifky from '/CarRepairImages/rifky.png'


const AboutUs = () => {


  const teamMembers = [
  
    {
      name: "Rifky Faris",
      role: "CTO",
      image: Rifky
    },
    {
      name: "Sharaf Ahamed",
      role: "CEO & Founder",
      image: Sharaf
    },
    {
      name: "Ahamed Lareef",
      role: "CFO",
      image:ahamed
    }
  ];


  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <VStack spacing={16}>

          <Box textAlign="center" mb={10}>
            <Heading as="h1" size="2xl" mb={6}>
              About Us
            </Heading>
            <Text fontSize="xl" color="gray.400" maxW="800px" mx="auto">
            Welcome to Car Connect, your trusted partner in vehicle servicing and maintenance. Our advanced vehicle servicing system is designed to provide seamless scheduling, real-time updates, and expert care for your car. Whether it’s routine maintenance, diagnostics, or major repairs, we ensure top-quality service with efficiency and transparency.

With a commitment to customer satisfaction and cutting-edge technology, we make vehicle servicing hassle-free. Book your service today and experience the convenience of our reliable and professional automotive solutions!
            </Text>
          </Box>

          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full" >
            <Box textAlign="center" p={8} borderRadius="20px" boxShadow="md" border={'solid'} borderColor={'#196662'} marginStart={9}>
              <Center mb={5}>
                <Users size={40} color='#196662'/>
              </Center>
              <Heading as="h3" size="md" mb={4}>Collaboration</Heading>
              <Text color="gray.600">Working together to achieve extraordinary results</Text>
            </Box>
            <Box textAlign="center" p={8} borderRadius="20px" boxShadow="md" marginStart={9}  border={'solid'} borderColor={'#196662'} >
              <Center mb={5}>
                <Target size={40} color='#196662'/>
              </Center>
              <Heading as="h3" size="md" mb={4}>Innovation</Heading>
              <Text color="gray.600">Pushing boundaries and exploring new possibilities</Text>
            </Box>
            <Box textAlign="center" p={8} borderRadius="20px" boxShadow="md" marginStart={9}  border={'solid'} borderColor={'#196662'} >
              <Center mb={5}>
                <Heart size={40} color='#196662'/>
              </Center>
              <Heading as="h3" size="md" mb={4}>Passion</Heading>
              <Text color="gray.600">Dedicated to delivering excellence in everything we do</Text>
            </Box>
          </SimpleGrid>

          {/* Team Section */}
          <Box w="full" paddingTop={5}>
            <Heading as="h2" size="xl" textAlign="center" mb={10}>
              Our Team
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {teamMembers.map((member, index) => (
                <Box key={index} textAlign="center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    borderRadius="full"
                    boxSize="200px"
                    mx="auto"
                    mb={4}
                    objectFit="cover"
                  />
                  <Heading as="h3" size="md" mb={2}>{member.name}</Heading>
                  <Text color="gray.600">{member.role}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
    
  )
}

export default AboutUs