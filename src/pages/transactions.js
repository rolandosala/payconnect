import { ChakraProvider, Flex, Box, Text, TableContainer, 
  Table, Thead, Tbody, Tr, Th, Td, InputGroup, InputLeftElement,
  Input, Stack, Button} from "@chakra-ui/react";
import { FiPlus, FiPlusircle, FiSearch } from "react-icons/fi";
import transactionList from './transactionList';
import { ViewTransactionInformation } from "./modalForm";

export default function Transactions() {
  return (
    <ChakraProvider>
      <Flex className="main-container" justifyContent='space-between' flexWrap='wrap'>
        <Text fontSize='20px' fontWeight='extrabold' textTransform='uppercase' w='100%'>Transactions Dashboard</Text>
        <Box bg="white" boxShadow='1px 1px 5px gray' w='50%' h='3.5em' borderRadius='10px' p='.5em'>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <FiSearch color='gray.400'/>
              </InputLeftElement>
              <Input type='txt' placeholder='Search here' id="searchInput" w='80%'/>
              <Button leftIcon={<FiSearch />} colorScheme="teal" variant='solid' ml={2}>Search</Button>
            </InputGroup>
            
        </Box>
        <Box w='45%' h='3.5em' borderRadius='10px' p='.5em'>
            <Stack direction='row' spacing={5}>
              <Text fontSize={25} fontWeight='bold' float={"right"}>Transaction Total: 1000</Text>
              {/* <CreateTerminalForm /> */}
            </Stack>
        </Box>
        <Box bg="white" boxShadow='1px 1px 5px gray' w='100%' h='auto' borderRadius='10px' p='1em'>
            <TableContainer >
              <Table size='sm' >
                <Thead>
                  <Tr textAlign='center'>
                    <Th>Account No.</Th>
                    <Th>Reference</Th>
                    <Th>Amount</Th>
                    <Th>Type</Th>
                    <Th>Response Code</Th>
                    <Th>Status</Th>
                    <Th>Date Transacted</Th>
                  </Tr>
                </Thead>
                <Tbody >
                    {transactionList.map(list => (
                      <Tr to={list.referenceNumber} key={list.referenceNumber} _hover={{ backgroundColor:'gray.100' }}>
                        <Td>{list.accountNumber}</Td>
                        <Td>{list.referenceNumber}</Td>
                        <Td>{list.amount}</Td>
                        <Td>{list.transctionType}</Td>
                        <Td>{list.responseCode}</Td>
                        <Td>{list.status}</Td>
                        <Td>{list.dateTransacted}</Td>
                        <Td>{<ViewTransactionInformation />}</Td>
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