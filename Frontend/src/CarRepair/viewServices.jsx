import { Container, VStack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useServiceStore } from '../store/service';
import ServiceList from '../components/ServiceList';
import ServiceSearch from '../components/ServiceSearch';

const UserDash = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedService, setSelectedService] = useState('all');
      

    const {fetchServices, services} = useServiceStore()
    
    useEffect(() => {
      fetchServices();
  }, [fetchServices]);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.shop.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedService === 'all' || service.type === selectedService;
    return matchesSearch && matchesType;
  });


  return (
    <Container maxW='container' p={5} >
        <VStack spacing={8}>
        <Text fontSize={30} fontWeight="bold" color="white" textAlign="center">
  User Dashboard
</Text>
        </VStack>
        <div className="app">
 
    <main className="main">
      <ServiceSearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
      <ServiceList services={filteredServices} />
    </main>
  
    </div>
        
    </Container>
  )
}

export default UserDash


