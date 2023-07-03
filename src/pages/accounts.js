import { ChakraProvider, Flex, Box, Text, TableContainer, 
  Table, Thead, Tbody, Tr, Th, Td, InputGroup, InputLeftElement,
  Input, Stack, Button} from "@chakra-ui/react";
import { FiPlus, FiPlusircle, FiSearch } from "react-icons/fi";
import accountList from "./accountList";
import { ViewAccountInformation, CreateAccountForm } from "./modalForm";

export default function Accounts() {
  return (
    <ChakraProvider>
      <Flex className="main-container" justifyContent='space-between' flexWrap='wrap'>
        <Text fontSize='20px' fontWeight='extrabold' textTransform='uppercase' w='100%'>Accounts Dashboard</Text>
        <Box bg="white" boxShadow='1px 1px 5px gray' w='70%' h='3.5em' borderRadius='10px' p='.5em'>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <FiSearch color='gray.400'/>
              </InputLeftElement>
              <Input type='txt' placeholder='Search here' id="searchInput" w='60%'/>
              <Button leftIcon={<FiSearch />} colorScheme="teal" variant='solid' ml={2} w='30%'>Search</Button>
              <CreateAccountForm />
            </InputGroup>
            
        </Box>
        <Box w='20%' h='3.5em' borderRadius='10px' p='.5em'>
            <Stack direction='row' spacing={5}>
              <Text fontSize={15} fontWeight='bold' float={"right"}>Active: 1000</Text>
              <Text fontSize={15} fontWeight='bold' float={"right"}>Unactive: 1000</Text>
             
            </Stack>
        </Box>
        <Box bg="white" boxShadow='1px 1px 5px gray' w='100%' h='auto' borderRadius='10px' p='1em'>
            <TableContainer >
              <Table size='sm' >
                <Thead>
                  <Tr textAlign='center'>
                    <Th>Name</Th>
                    <Th>Username</Th>
                    <Th>Access Type</Th>
                    <Th>Status</Th>
                    <Th>Added By</Th>
                    <Th>Date Added</Th>
                    <Th>Date Updated</Th>
                  </Tr>
                </Thead>
                <Tbody >
                    {accountList.map(list => (
                      <Tr to={list.id} key={list.id} _hover={{ backgroundColor:'gray.100' }}>
                        <Td>{list.firstname} {list.lastname}</Td>
                        <Td>{list.username}</Td>
                        <Td>{list.accessType}</Td>
                        <Td>{list.status}</Td>
                        <Td>{list.addedBy}</Td>
                        <Td>{list.dateAdded}</Td>
                        <Td>{list.dateUpdated}</Td>
                        <Td>{<ViewAccountInformation />}</Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};