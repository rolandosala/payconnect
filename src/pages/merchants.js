import { ChakraProvider, Flex, Box, Text, TableContainer, 
        Table, Thead, Tbody, Tr, Th, Td, InputGroup, InputLeftElement,
        Input, Stack, Button} from "@chakra-ui/react";
import { FiPlus, FiPlusircle, FiSearch } from "react-icons/fi";
import merchantList from './merchantList';
import { CreateMerchantForm, ViewMerchantInformation } from "./modalForm";

export default function Merchants() {
  return (
    <ChakraProvider>
      <Flex className="main-container" justifyContent='space-around' flexWrap='wrap'>
        <Text fontSize='20px' fontWeight='extrabold' textTransform='uppercase' w='100%'>Merchant Dashboard</Text>
        <Box bg="white" boxShadow='1px 1px 5px gray' w='50%' h='3.5em' borderRadius='10px' p='.5em'>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <FiSearch color='gray.400'/>
              </InputLeftElement>
              <Input type='txt' placeholder='Search here' id="searchInput"/>
            </InputGroup>
        </Box>
        <Box  bg="white" boxShadow='1px 1px 5px gray' w='45%' h='3.5em' borderRadius='10px' p='.5em'>
            <Stack direction='row' spacing={5}>
              <Button leftIcon={<FiSearch />} colorScheme="teal" variant='solid' w='50%'>Search</Button>
              <CreateMerchantForm />
            </Stack>
        </Box>
        <Box bg="white" boxShadow='1px 1px 5px gray' w='100%' h='auto' borderRadius='10px' p='1em'>
            <TableContainer >
              <Table size='sm' >
                <Thead>
                  <Tr textAlign='center'>
                    <Th>Merchant ID</Th>
                    <Th>Name</Th>
                    <Th>Category Code</Th>
                    <Th>Status</Th>
                    <Th>Date Created</Th>
                    <Th>Last Updated</Th>
                  </Tr>
                </Thead>
                <Tbody >
                    {merchantList.map(list => (
                      <Tr to={list.merchantID} key={list.merchantName} _hover={{ backgroundColor:'gray.100' }}>
                        <Td>{list.merchantID}</Td>
                        <Td>{list.merchantName}</Td>
                        <Td>{list.merchantCode}</Td>
                        <Td>{list.merchantStatus}</Td>
                        <Td>{list.dateCreated}</Td>
                        <Td>{list.dateUpdated}</Td>
                        <Td>{<ViewMerchantInformation />}</Td>
                      </Tr>
                    ))}
                   {/*  <Td>000000000000901</Td>
                    <Td>Merchant 1</Td>
                    <Td>0721</Td>
                    <Td>Active</Td>
                    <Td>2023-07-01 00:00:00</Td>
                    <Td>2023-07-01 00:00:00</Td> */}
                </Tbody>
              </Table>
            </TableContainer>
        </Box>
      </Flex>
    </ChakraProvider>
    );
};