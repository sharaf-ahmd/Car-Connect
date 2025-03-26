import React from 'react'
import {  FormControl,  FormLabel,} from '@chakra-ui/form-control'
import { toaster } from "@/components/ui/toaster"
import { Mail, Phone, MapPin } from 'lucide-react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  VStack,
  Text,
  Icon,
  Center
} from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

const ContactUs = () => {

  
  

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@carcnct.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+94 7768 746 632",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Business Street, Suite 100, City, State 12345",
    },
  ];
  return ((
    <Box py={10}>
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={6}>
              Contact Us
            </Heading>
            <Text fontSize="xl" color="gray.400" maxW="800px" mx="auto">
            Get in Touch with Us <br />
We’re here to help! Whether you have a question, need assistance, or just want to share your feedback, we’d love to hear from you. Our team is dedicated to providing you with prompt and friendly support <br /><br />
    Call Us for immediate assistance. <br />
   Email Us with your inquiries, and we’ll get back to you as soon as possible. <br />
   Live Chat for quick responses from our support team. <br /><br />
Your satisfaction is our priority—reach out today and let’s connect! 
            </Text> <br />
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" marginStart={5}  >
            {contactInfo.map((item, index) => (
              <VStack
                key={index}
                p={8}
                borderRadius="20px"
                boxShadow="md"
                spacing={4}
                align="center"
                border={'solid'} borderColor={'#3D5668'}
                marginStart={5}
                
              >
                <Center>
                  <Icon as={item.icon} boxSize={8} color="#3D5668" />
                </Center>
                <Heading as="h3" size="md">
                  {item.title}
                </Heading>
                <Text color="gray.600" textAlign="center">
                  {item.content}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>

          
          <Box w="lg" maxW="800px" mx="auto" marginTop={9} p={6} rounded={"20px"} shadow={"md"} border={'solid'} borderColor={'#3D5668'}>
            <form >
              <VStack spacing={6}>
            
                  <FormControl isRequired>
                    <FormLabel textAlign={'center'} marginBottom={9}>First Name</FormLabel>
                    <Input type="text" placeholder="John" w={400} p={5}/>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel textAlign={'center'} marginBottom={9}>Last Name</FormLabel>
                    <Input type="text" placeholder="Doe" w={400} p={5} />
                  </FormControl>
               
                <FormControl isRequired>
                  <FormLabel textAlign={'center'} marginBottom={9}>Email</FormLabel>
                  <Input type="email" placeholder="john@example.com" w={400} p={5}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel textAlign={'center'} marginBottom={9}>Subject</FormLabel>
                  <Input type="text" placeholder="How can we help you?"  w={400} p={5}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel textAlign={'center'} marginBottom={9}>Message</FormLabel>
                  <Textarea
                    placeholder="Your message here..."
                    rows={6}
                    w={400} p={5}
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  p={5}
                  w={{ base: "full", md: "auto" }}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </Box>
  ))
}

export default ContactUs