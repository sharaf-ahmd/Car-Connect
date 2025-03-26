import React from 'react'
import { Container, VStack, Text, Flex,Grid, GridItem} from '@chakra-ui/react'
import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"
import image1 from '/CarRepairImages/1.png';
import image2 from '/CarRepairImages/1.avif';
import image4 from '/CarRepairImages/2.avif';
import logout from '/CarRepairImages/lg.png';




const MechanicDash = () => {


  const Operations=[

    {
      title:"Add New Service",
      description:"Expand your offerings and introduce new services to your clients.",
      buttonText:"Add Now",
      image:image1,
      to:'/CreatePage',

    },

    {
      title:"My Services",
        description:"manage your services by updating existing offerings to improve quality or deleting outdated ones.",
        buttonText:"View Now",
        image:image2,
        to:'/Operations',

    },

    {
      title:"View Bookings",
        description:"Easily manage your bookings by updating appointment details or canceling unnecessary ones.",
        buttonText:"View Now",
        image:image4,
        to:'',

    },

    {
        title:"Log Out",
        description:"",
        buttonText:"Log Out",
        image:logout,
        to:''
    }

  ]

  return (
    <Container maxW='container' p={8} marginStart={5} >
      <VStack spacing={8}>
        <Text fontSize={30} fontWeight="bold" color="white" textAlign="center" paddingBottom={5}>
          Mechanic Dashboard
        </Text>
      </VStack>

      <Flex wrap="wrap" justify="center" gap={6}>
       {Operations.map((operation, index) => (
  <Card.Root key={index} flexDirection="row" overflow="hidden" maxW="xl" borderRadius={15} borderColor={'#f26361'}>
    <Image
      objectFit="cover"
      maxW="200px"
      src={operation.image} // Dynamically assign image
      alt={operation.title}
    />
    <Box m={5}>
        <Card.Body>
          <Card.Title mb="2">{operation.title}</Card.Title>
          <Card.Description>{operation.description}</Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button as="a" m={2} p={3} href={operation.to}>{operation.buttonText}</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  ))}

</Flex>


    </Container>

  )
}

export default MechanicDash