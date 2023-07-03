import { 
    ChakraProvider, Grid, GridItem, Flex, Box, Spacer, VStack
 } from "@chakra-ui/react";

export default function Layout() {

    return (
        <ChakraProvider>
            <Grid 
                templateAreas={`
                    "nav main"
                    "nav main"
                    "nav main"
                `}
                gridTemplateRows={'50px 1fr 10px'}
                gridTemplateColumns={'15em 1fr'}
                h='100vh'
                gap='1'
                color='black'
                fontWeight='bold'
                p='3'
            >
                {/* <GridItem p='2' bg='orange.300' area={'header'}>
                    Header
                </GridItem> */}
                <GridItem 
                    p='2' borderRadius='20px' bg='pink.300' 
                     area={'nav'}
                >
                    <Flex 
                        minWidth='max-content'
                        alignItems='left'
                        flexDirection='column'
                        justifyContent='space-between'
                        bg='red.400'
                        h='100%'
                        gap='2' p='5'>
                        <Box>
                            Logo
                        </Box>
                        <Spacer />
                        <Box>
                            Menu 
                        </Box>
                        <Spacer />
                        <Box>
                            Footer
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem p='2' bg='pink.300' area={'main'}>
                    Main
                </GridItem>
            </Grid>
        </ChakraProvider>
    );
}