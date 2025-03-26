import React from 'react'
import { useState } from 'react'
import { Box, Button, Container, Heading, Input, Toaster, VStack } from '@chakra-ui/react'
import { useColorModeValue } from '../components/ui/color-mode'
import { useServiceStore } from '../store/service'
import { toaster } from "../components/ui/toaster"


const CreatePage = () => {

  const [newService, setNewService] = useState({
    name: '',
    vendor: '',   
    location: '', 
    distance: '',
    type: '',     
    rating: '',
    price: ''
  })

  
const showToast = () => {
  toaster.create({
    description: "Service added successfully",
    type: "success",
    duration: 3000,
    isClosable: true,
    containerStyle: {
      maxWidth: "400px", 
      padding: "24px",
      fontSize: "xl",   
      
    },
  });
}
  const showToast2 = () => {
    toaster.create({
      description: "Please fill all fields",
      type: "error",
      duration: 3000,
      isClosable: true,
      containerStyle: {
        maxWidth: "400px", 
        padding: "16px",   
        fontSize: "lg",    
      },
    });}

  const handleChange = (e) => {
    setNewService({...newService, [e.target.name]: e.target.value});
};


const {createService}=useServiceStore()


const  addService = async() => {   
   const {success,message}= await createService(newService)
   console.log(success,message)
   if (success) {
    showToast()
   }else{
   showToast2()
   }

   setNewService({name:'', vendor:'', location:'', distance:'', type:'', rating:'', price:''})
}




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
          Create New Service
        </Heading>
        <Box w={'md'} p={6} bg={useColorModeValue('white', 'gray.800')} rounded={"lg"} shadow={"md"}>

       

        <VStack spacing={4}>
          <Input 
          padding={3} placeholder='Service Name'  name='name' value={newService.name} onChange={handleChange}>
          </Input>

          <Input 
           padding={3} placeholder='Shop Name'  name='vendor' value={newService.vendor} onChange={handleChange}>
          </Input>

          <Input 
           padding={3} placeholder='Location'  name='location' value={newService.location} onChange={handleChange}>
          </Input>
          
          <Input 
           padding={3} placeholder='Distance'  name='distance' value={newService.distance} onChange={handleChange} type='number'>
          </Input>

          <Input 
           padding={3} placeholder='Service-Type'  name='type' value={newService.type} onChange={handleChange}>
          </Input>

          <Input 
           padding={3} placeholder='Service Rating'  name='rating' value={newService.rating} onChange={handleChange} type='number'>
          </Input>

          <Input 
           padding={3} placeholder='Service Cost'  name='price' value={newService.price} onChange={handleChange} type='number'>
          </Input>

          <Button  padding={3} colorScheme='blue' onClick={addService} w='full'> ADD SERVICE</Button>

        </VStack>

         </Box>

      </VStack>

    </Container>
  )
}

export default CreatePage