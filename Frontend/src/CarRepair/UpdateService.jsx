import { useColorModeValue } from '../components/ui/color-mode'
import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { useServiceStore } from '../store/service.js';

const UpdateService = () => {

  const handleUpdate = async()=>{
    await UpdateService(newService._id, newService);
    navigate('/operations')
  }
    
  const handleChange = (e) => {
    setNewService({...newService, [e.target.name]: e.target.value});
   };

   const {UpdateService} =useServiceStore();
     
   const location = useLocation();
   const navigate = useNavigate();

   const [newService, setNewService] = useState(location.state?.service || {});
   

  return (
     <Container maxW={"container.sm"}  >
          <VStack
          spacing={8}>
            <Heading  as="h1" 
            fontSize={{ base: "2xl", md: "3xl" }} 
            fontWeight="bold" 
            color={useColorModeValue("gray.700", "gray.200")} 
            textAlign="center" 
            mb={8}
            paddingTop={5}
            >  
              Update Service
            </Heading>
            <Box w={'md'} p={6} bg={useColorModeValue('white', 'gray.800')} rounded={"lg"} shadow={"md"}>
    
           
    
            <VStack spacing={4}>
              <Input 
              padding={3} placeholder='Service Name'  name='name' value={newService?.name || '' } onChange={handleChange}>
              </Input>
    
              <Input 
               padding={3} placeholder='Shop Name'  name='vendor' value={newService?.vendor || ''} onChange={handleChange}>
              </Input>
    
              <Input 
               padding={3} placeholder='Location'  name='location' value={newService?.location || ''} onChange={handleChange}>
              </Input>
              
              <Input 
               padding={3} placeholder='Distance'  name='distance' value={newService?.distance || ''} onChange={handleChange} type='number'>
              </Input>
    
              <Input 
               padding={3} placeholder='Service-Type'  name='type' value={newService?.type || ''} onChange={handleChange}>
              </Input>
    
              <Input 
               padding={3} placeholder='Service Rating'  name='rating' value={newService?.rating || ''} onChange={handleChange} type='number'>
              </Input>
    
              <Input 
               padding={3} placeholder='Service Cost'  name='price' value={newService?.price || ''} onChange={handleChange} type='number'>
              </Input>
    
              <Button  padding={3} colorScheme='blue' onClick={handleUpdate} w='full'> UPDATE</Button>
    
            </VStack>
    
             </Box>
    
          </VStack>
    
        </Container>
    
  )
}

export default UpdateService