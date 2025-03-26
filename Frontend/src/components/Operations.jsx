import React, { useEffect, useState } from 'react';
import { Button, Container, For, Stack, Table } from '@chakra-ui/react';
import { useServiceStore } from '../store/service';
import { Link, useNavigate } from 'react-router-dom';
import { toaster } from "../components/ui/toaster"

const Operations = () => {

    
  const delToast = () => {
    toaster.create({
      description: "Service Deleted successfully",
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


    const errToast = () => {
      toaster.create({
        description: "Action failed",
        type: "error",
        duration: 3000,
        isClosable: true,
        containerStyle: {
          maxWidth: "400px", 
          padding: "16px",   
          fontSize: "lg",    
        },
      });}

  const {fetchServices, services, deleteService} = useServiceStore()
  const navigate = useNavigate();
      useEffect(() => {
        fetchServices();
    }, [fetchServices]);

    const DeleteService = async (sid) =>{
      const {success, message} = await deleteService(sid)
      console.log(success)
    
      if(success){
        delToast()
      }else{
        errToast()
      }

    }

  return (
   
      <Stack gap={10} p={8}>
        <Table.Root size="sm" variant="outline" border={'solid'}  borderRadius={'20px'} borderColor={'#196662'}>
          <Table.Header bgColor={' #c62a36'} >
            <Table.Row >
              <Table.ColumnHeader p={3} fontSize={'xl'}>Service</Table.ColumnHeader>
              <Table.ColumnHeader fontSize={'xl'}>Shop</Table.ColumnHeader>
              <Table.ColumnHeader fontSize={'xl'}>Distance</Table.ColumnHeader>
              <Table.ColumnHeader fontSize={'xl'}>Rating</Table.ColumnHeader>
              <Table.ColumnHeader fontSize={'xl'} textAlign="end">Price</Table.ColumnHeader>
              <Table.ColumnHeader fontSize={'xl'} textAlign="end" paddingEnd={'35px'}>Actions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {services.map((service) => (
              <Table.Row key={service.id}>
                <Table.Cell paddingStart={5}>{service.name}</Table.Cell>
                <Table.Cell>{service.vendor}</Table.Cell>
                <Table.Cell>{service.distance}</Table.Cell>
                <Table.Cell>{service.rating}</Table.Cell>
                <Table.Cell textAlign="end">{service.price}</Table.Cell>
                <Table.Cell textAlign="end">

                  <Button colorScheme="blue" size="md" p={1} onClick={()=>DeleteService(service._id)} mr={2} color={'white'} bgColor={" #c62a36"} >
                    Delete
                  </Button>
                  
                  <Button colorScheme="green" size="md" p={1} m={2} onClick={() => navigate('/UpdateService', { state: { service } })} color={'white'} bgColor={" #023D54"} >
                    Update
                  </Button>
                </Table.Cell>

              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Stack>

  );
};

export default Operations;
