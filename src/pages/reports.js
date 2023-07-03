import { ChakraProvider, Flex, Box, Text, TableContainer, 
  Table, Thead, Tbody, Tr, Th, Td, InputGroup, InputLeftElement,
  Input, Stack, Button} from "@chakra-ui/react";
import { FiDownload, FiPlus, FiPlusircle, FiSearch } from "react-icons/fi";
import accountList from "./accountList";
import { ViewAccountInformation, CreateAccountForm } from "./modalForm";

export default function Reports() {
  return (
    <ChakraProvider>
      <Flex className="main-container" justifyContent='' flexWrap='wrap'>
        <Text fontSize='20px' fontWeight='extrabold' textTransform='uppercase' w='100%'>Reports Dashboard</Text>
        <Stack direction='row' bg="white" boxShadow='1px 1px 5px gray' w='52%' h='auto' borderRadius='10px' p='.5em'>
            <Stack direction='column'>
              <Text>FROM</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <FiSearch color='gray.400'/>
                </InputLeftElement>
                <Input type='date' placeholder='Search here' id="searchInput" w='100%'/>
              </InputGroup>
            </Stack>
            <Stack direction='column'>
              <Text>TO</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <FiSearch color='gray.400'/>
                </InputLeftElement>
                <Input type='date' placeholder='Search here' id="searchInput" w='100%'/>
              </InputGroup>
            </Stack>
            <Stack direction='column'>
              <Text>:</Text>
              <Button leftIcon={<FiSearch />} colorScheme="teal" variant='solid' ml={2} w='100%'>Search</Button>
            </Stack>
            
        </Stack>
        <Box bg="white" boxShadow='1px 1px 5px gray' w='100%' h='auto' borderRadius='10px' p='1em' mt={5}>
            <TableContainer >
              <Table size='sm' >
                <Thead>
                  <Tr textAlign='center'>
                    <Th>Filename</Th>
                    <Th>Date Created</Th>
                    <Th>Download</Th>
                  </Tr>
                </Thead>
                <Tbody >
                    {accountList.map(list => (
                      <Tr to={list.id} key={list.id} _hover={{ backgroundColor:'gray.100' }}>
                        <Td>{list.firstname} {list.lastname}</Td>
                        <Td>{list.username}</Td>
                        <Td>
                          <Button colorScheme="teal"  >
                            <FiDownload fontSize='20px'/>
                          </Button>   
                        </Td>
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