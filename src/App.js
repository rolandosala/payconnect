/* import logo from './logo.svg';
import './App.css'; */
import { 
  Container, VStack, ChakraProvider, Flex, Spacer,
  Center, Square, Box, Text, Grid, HStack, Heading,
  ButtonGroup, Button, GridItem, SimpleGrid, StackDivider,
  Wrap, WrapItem, Avatar, useBreakpointValue
 } from '@chakra-ui/react'

 function Example() {
  const variant = useBreakpointValue(
    {
      base: 'outline',
      md: 'solid',
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'md',
    },
  )

  return (
    <VStack align='flex-start'>
      <Text>Resize your window to see the button variant change</Text>
      <Button colorScheme='teal' variant={variant}>
        Button
      </Button>
    </VStack>
  )
} 

function App() {
  return (
    <ChakraProvider>
      <Example />
        {/* <Flex color='white'>
          <Center w='100px' bg='green.500'>
            <Text>Box 1</Text>
          </Center>
          <Square bg='blue.500' size='150px'>
            <Text>Box 2</Text>
          </Square>
          <Box flex='1' bg='tomato'>
            <Text>Box 3</Text>
          </Box>
        </Flex> */}
       {/*  <Flex p="5" bg='gray.400'>
          <Box p='4' bg='red.400'>
            Box 1
          </Box>
          <Spacer />
          <Box p='4' bg='green.400'>
            Box 2
          </Box>
        </Flex> */}
        {/* <Box>
          <Text>Flex and Spacer: Full width, equal Spacing</Text>
          <Flex p="5" bg="gray.500" w="80%">
            <Box w='170px' h='10' bg='red.500' />
            <Spacer />
            <Box w='170px' h='10' bg='red.500' />
            <Spacer />
            <Box w='170px' h='10' bg='red.500' />
          </Flex>

          <Text>
            Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
          </Text>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} bg="red.300" p="5" w="auto">
            <Box w='170px' h='10' bg='blue.500' />
            <Box w='170px' h='10' bg='blue.500' />
            <Box w='170px' h='10' bg='blue.500' />
          </Grid>

          <Text>
            HStack: The children have equal spacing but don't span the whole container
          </Text>
          <HStack spacing='20' bg="green.300" p="5">
            <Box w='170px' h='10' bg='teal.500' />
            <Box w='170px' h='10' bg='teal.500' />
            <Box w='170px' h='10' bg='teal.500' />
          </HStack>
        </Box> */}
        {/* <Flex minWidth='max-content' alignItems='center' gap='0' p="5" bg="gray.300">
          <Box p='2'>
            <Heading size='md'>Chakra App</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap='0'>
            <Button colorScheme='teal'>Sign Up</Button>
            <Button colorScheme='teal'>Log in</Button>
          </ButtonGroup>
        </Flex> */}
        {/* <Grid templateColumns='repeat(4, 1fr)' gap={5} p='5' bg='gray.300'>
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
        </Grid> */}
        {/* <Grid
          h='200px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
          p='5'
        >
          <GridItem rowSpan={2} colSpan={1} bg='tomato' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={4} bg='tomato' />
        </Grid> */}
        {/* <Grid
          templateAreas={`"header header"
                          "nav main"
                          "footer footer"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h='100vh'
          gap='4'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' bg='orange.300' area={'header'}>
            Header
          </GridItem>
          <GridItem pl='2' bg='pink.300' area={'nav'}>
            Nav
          </GridItem>
          <GridItem pl='2' bg='green.300' area={'main'}>
            Main
          </GridItem>
          <GridItem pl='2' bg='blue.300' area={'footer'}>
            Footer
          </GridItem>
        </Grid> */}
        {/* <SimpleGrid minChildWidth='200px' spacing={10} p='2'>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
        </SimpleGrid> */}
        {/* <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
        </SimpleGrid> */}
        {/* <HStack direction={['column', 'row']} spacing='25px'>
          <Box w='40px' h='40px' bg='yellow.200'>
            1
          </Box>
          <Box w='40px' h='40px' bg='tomato'>
            2
          </Box>
          <Box w='40px' h='40px' bg='pink.100'>
            3
          </Box>
        </HStack> */}
       {/*  <VStack
          divider={<StackDivider borderColor='red.500' />}
          spacing={4}
          align='stretch'
          w='20%'
          h='100vh'
          p='5'
          bg='gray.300'
          borderRadius='10'
        >
          <Box h='40px' bg='yellow.200'>
            1
          </Box>
          <Box h='40px' bg='tomato'>
            2
          </Box>
          <Box h='40px' bg='pink.100'>
            3
          </Box>
        </VStack> */}
        {/* <Wrap w='100%' bg='gray.400' p='5'>
          <WrapItem>
            <Center w='40em' h='80px' bg='red.200'>
              Box 1
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w='40em' h='80px' bg='green.200'>
              Box 2
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w='40em' h='80px' bg='tomato'>
              Box 3
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w='40em' h='80px' bg='blue.200'>
              Box 4
            </Center>
          </WrapItem>
        </Wrap> */}
       {/*  <Wrap>
          <WrapItem>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          </WrapItem>
          <WrapItem>
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
          </WrapItem>
          <WrapItem>
            <Avatar bg='teal.500' />
          </WrapItem>
        </Wrap> */}
        
    </ChakraProvider>
    
  );
}

export default App;
