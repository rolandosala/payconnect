import { Box, ChakraProvider, Flex, Text } from "@chakra-ui/react";

export default function Dashboard() {
    return (
        <ChakraProvider>
             <Flex className="main-container" justifyContent='space-between' flexWrap='wrap'>
                <Box bg="white" boxShadow='1px 1px 5px gray' w='70%' h='10em' borderRadius='10px' p='1em'>
                    <Text fontSize='20px' fontWeight='extrabold' textTransform='uppercase'>Welcome! Admin</Text>
                    <Text>Today's Transaction</Text>
                    <Text fontSize='35px' mt='.5em'>PHP 1, 849, 934.50</Text>
                </Box>
                <Box bg="white" boxShadow='1px 1px 5px gray' w='28%' h='10em' borderRadius='10px' p='1em'>
                    <Text fontSize='20px' fontWeight='bold' textTransform='uppercase'>OFFLINE TERMINAL</Text>
                    <Text fontSize='25px' fontWeight='extrabold'>10</Text>
                    <Text fontSize='20px' fontWeight='bold' textTransform='uppercase'>ONLINE TERMINAL</Text>
                    <Text fontSize='25px' fontWeight='extrabold'>10</Text>
                </Box>
                <Box bg="white" boxShadow='1px 1px 5px gray' w='28%' h='15em' borderRadius='10px' p='1em'>
                    <Text fontSize='22px' fontWeight='bold' textTransform='uppercase'>Visa/Mastercard</Text>
                    <Text fontSize='20px' fontWeight=''>PHP 10,000.00</Text>
                    <Text fontSize='22px' fontWeight='bold' textTransform='uppercase'>Bancnet</Text>
                    <Text fontSize='20px' fontWeight=''>PHP 10,000.00</Text>
                    <Text fontSize='22px' fontWeight='bold' textTransform='uppercase'>Cashout</Text>
                    <Text fontSize='20px' fontWeight=''>PHP 10,000.00</Text>
                </Box>
                <Box bg="white" boxShadow='1px 1px 5px gray' w='70%' h='24em' borderRadius='10px' p='1em'>
                    {/* <Text fontSize='20px' fontWeight='bold' textTransform='uppercase'>OFFLINE TERMINAL</Text>
                    <Text fontSize='30px' fontWeight='extrabold'>10</Text>
                    <Text fontSize='20px' fontWeight='bold' textTransform='uppercase'>ONLINE TERMINAL</Text>
                    <Text fontSize='30px' fontWeight='extrabold'>10</Text> */}
                </Box>
             </Flex>
        </ChakraProvider>
          
    );
}