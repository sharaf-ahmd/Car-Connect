
import React from 'react'
import { Text, Box, Button, Image, CardBody, CardHeader, CardFooter, CardRoot } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const DashCards = ({ title, description, buttonText, imageSrc, to }) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius={20} overflow="hidden" >
          <CardRoot bgColor={'#1C1E28'}>
        <Image src={imageSrc} h={200} />
        <CardHeader>
          <Text fontSize="lg" fontWeight="bold" textAlign={'center'} m={3}>
            {title}
          </Text>
        </CardHeader>
        <CardBody textAlign={'center'}>
          <Text>{description}</Text>
        </CardBody>
        <CardFooter display="flex" justifyContent="center">
          <Link to={to}>
          <Button as='a' variant="solid" colorScheme="blue" p={4} m={4}>
            {buttonText}
          </Button>
          </Link>
        </CardFooter>
      </CardRoot>
      </Box>
    );
  };

export default DashCards
