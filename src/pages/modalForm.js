import { Button, ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, 
         ModalHeader, ModalOverlay, useDisclosure, ModalFooter, FormControl, FormLabel, Input, Select, Tabs, TabList, Tab, TabPanel, TabPanels, InputGroup,
         InputLeftElement, Stack, Text} from "@chakra-ui/react";
import { FiDollarSign, FiEye, FiHome, FiPercent, FiPlusCircle} from "react-icons/fi";
import merchantList from "./merchantList";

export function CreateMerchantForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ChakraProvider>
            <Button onClick={onOpen} leftIcon={<FiPlusCircle />} colorScheme="teal" variant='solid' w='50%'  >Create Merchant</Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Merchant Account</ModalHeader>
                    <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Tabs variant='unstyled'>
                                <TabList>
                                    <Tab _selected={{ color: 'white', bg: 'blue.500'}}>Merchant Information</Tab>
                                    <Tab _selected={{ color: 'white', bg: 'green.400'}}>Merchant Discount Rate</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <FormControl>
                                            <FormLabel>Merchant Name</FormLabel>
                                            <Input placeholder="Input Merchant Name" /> 
                                            <FormLabel mt={2}>Merchant ID</FormLabel>
                                            <Input placeholder="Input Merchant ID" />
                                            <FormLabel mt={2}>Category Code</FormLabel>
                                            <Select placeholder="Select Category Code">
                                                <option>0993</option>
                                                <option>0949</option>
                                            </Select>
                                            <FormLabel mt={2}>Email</FormLabel>
                                            <Input placeholder="Email Address" />
                                            
                                        </FormControl>
                                    </TabPanel>
                                    <TabPanel>
                                        <FormControl>
                                            <FormLabel>Bancnet Discount Rate</FormLabel>
                                            <Stack direction='row'>
                                                <InputGroup w='50%'>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiPercent color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Percentage Fee' />
                                                </InputGroup>
                                                <InputGroup w='50%'>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiDollarSign color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Fixed Fee' />
                                                </InputGroup>
                                            </Stack>
                                            <FormLabel mt={5}>Visa/Mastercard Discount Rate</FormLabel>
                                            <Stack direction='row'>
                                                <InputGroup w='50%'>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiPercent color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Percentage Fee' />
                                                </InputGroup>
                                                <InputGroup w='50%'>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiDollarSign color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Fixed Fee' />
                                                </InputGroup>
                                            </Stack>
                                            <FormLabel mt={5}>Distribution of Fees</FormLabel>
                                            <Stack direction='row'>
                                                <InputGroup w='50%'>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiHome color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Merchant' />
                                                </InputGroup>
                                                <InputGroup w='50%'>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiHome color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Branch' />
                                                </InputGroup>
                                            </Stack>
                                            <FormLabel mt={5}>Cashout Fee</FormLabel>
                                            <Stack direction='column'>
                                                <Text>Enable Cashout Fee</Text>
                                                <InputGroup w='50%'>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiDollarSign color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Cashout Amount' />
                                                </InputGroup>
                                            </Stack>
                                            <FormLabel mt={5}>Withholding Tax</FormLabel>
                                            <Stack direction='column'>
                                                <InputGroup w='50%'>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiPercent color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Tax Amount' />
                                                </InputGroup>
                                            </Stack>
                                            <Stack direction='row' p={4} bg='gray.400' mt={4}>
                                                <Button colorScheme='blue' mr={3} type="submit" w='45%'>Save</Button>
                                                <Button onClick={onClose} w='45%'>Cancel</Button>
                                            </Stack>
                                            
                                        </FormControl>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                            
                        </ModalBody>
                       
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
}

export function ViewMerchantInformation() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function ConfirmDisableMerchant() {
        let confirmation = 'You\'re about to disable this merchant!\n Are your sure want to disable.';
        if(window.confirm(confirmation) === true) {
            alert('Merchant Disabled');
        }
    }

    return(
        <ChakraProvider>
            <Button onClick={onOpen} colorScheme="teal" w='10%' borderRadius='50%' >
                <FiEye fontSize='20px'/>
            </Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size='lg'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Merchant Information</ModalHeader>
                    <ModalCloseButton />
                        <ModalBody pb={6}>
                        <Tabs variant='unstyled'>
                            <TabList>
                                <Tab _selected={{ color: 'white', bg: 'blue.500'}}>Information</Tab>
                                <Tab _selected={{ color: 'white', bg: 'blue.500'}}>Discount Rate</Tab>
                                <Tab _selected={{ color: 'white', bg: 'blue.500'}}>Terminal List</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <FormControl>
                                        <FormLabel>Merchant Name</FormLabel>
                                        <Input value='Merchant 01' readOnly/> 
                                        <FormLabel mt={2}>Merchant ID</FormLabel>
                                        <Input value='00000000000902' readOnly/>
                                        <FormLabel mt={2}>Category Code</FormLabel>
                                        <Input value='0445' readOnly/>
                                        <FormLabel mt={2}>Email</FormLabel>
                                        <Input value='merchant@gmail.com' readOnly/>
                                        {/* <Box bg='' mt={5}>
                                            <Button bg='red.500' mr={3} type="submit" _hover={{ boxShadow: '1px 1px 3px gray' }}>Disable Merchant</Button>
                                        </Box> */}
                                    </FormControl>
                                </TabPanel>
                                <TabPanel>
                                    <FormControl>
                                        <FormLabel>Bancnet Rate</FormLabel>
                                        <Stack direction='row' w='100%'>
                                            <Stack direction='column' w='50%'>
                                                <Text>Percentage Fee</Text>
                                                <InputGroup >
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiPercent color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Percentage Fee' value='50%' readOnly/>
                                                </InputGroup>
                                            </Stack>
                                            <Stack direction='column' w='50%'>
                                                <Text>Fixed Fee</Text>
                                                <InputGroup>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiDollarSign color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Fixed Fee' value='0.00' readOnly/>
                                                </InputGroup>
                                            </Stack>
                                        </Stack>
                                        <FormLabel mt={5}>Visa/Mastercard Rate</FormLabel>
                                        <Stack direction='row' w='100%'>
                                            <Stack direction='column' w='50%'>
                                                <Text>Percentage Fee</Text>
                                                <InputGroup >
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiPercent color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Percentage Fee' value='50%' readOnly/>
                                                </InputGroup>
                                            </Stack>
                                            <Stack direction='column' w='50%'>
                                                <Text>Fixed Fee</Text>
                                                <InputGroup>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiDollarSign color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Fixed Fee' value='0.00' readOnly/>
                                                </InputGroup>
                                            </Stack>
                                        </Stack>
                                        <FormLabel mt={5}>Distribution of Fees</FormLabel>
                                        <Stack direction='row' w='100%'>
                                            <Stack direction='column' w='50%'>
                                                <Text>Merchant</Text>
                                                <InputGroup >
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiHome color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Percentage Fee' value='50%' readOnly/>
                                                </InputGroup>
                                            </Stack>
                                            <Stack direction='column' w='50%'>
                                                <Text>Branch</Text>
                                                <InputGroup>
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiHome color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Fixed Fee' value='0.00' readOnly/>
                                                </InputGroup>
                                            </Stack>
                                        </Stack>
                                        <FormLabel mt={5}>Cashout Fee</FormLabel>
                                        <Stack direction='row' w='100%'>
                                            <Stack direction='column' w='50%'>
                                                <Text>Enable Cashout Fee</Text>
                                                <InputGroup >
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiDollarSign color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Percentage Fee' value='0.00' readOnly/>
                                                </InputGroup>
                                            </Stack>
                                        </Stack>
                                        <FormLabel mt={5}>Withholding Tax</FormLabel>
                                        <Stack direction='row' w='100%'>
                                            <Stack direction='column' w='50%'>
                                                <InputGroup >
                                                    <InputLeftElement pointerEvents='none'>
                                                        <FiPercent color='gray.400'/>
                                                    </InputLeftElement>
                                                <Input type='txt' placeholder='Percentage Fee' value='0%' readOnly/>
                                                </InputGroup>
                                            </Stack>
                                        </Stack>
                                    </FormControl>
                                </TabPanel>
                                <TabPanel>
                                    <FormLabel >Terminal</FormLabel>
                                    <Stack direction='row' w='100%'>
                                        <Stack direction='column' w='50%'>
                                            <Text>Terminal ID</Text>
                                            <Input type='txt' placeholder='Percentage Fee' value='00000902' readOnly/>
                                            <Input type='txt' placeholder='Percentage Fee' value='00000903' readOnly/>
                                        </Stack>
                                        <Stack direction='column' w='50%'>
                                            <Text>Terminal Type</Text>
                                            <Input type='txt' placeholder='Fixed Fee' value='Visa/Mastercard' readOnly/>
                                            <Input type='txt' placeholder='Fixed Fee' value='Bancnet' readOnly/>
                                        </Stack>
                                    </Stack>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        </ModalBody>
                        <ModalFooter>
                            <Stack direction='row' justifyContent='space-between' w='100%' p={2}>
                                <Button bg='green.300' type='submit' mr={3} _hover={{ boxShadow: '1px 1px 3px gray', backgroundColor: 'green', color: 'white'}} onClick={onClose}>UPDATE MERCHANT</Button>
                                <Button bg='red.300' type='submit' mr={3} _hover={{ boxShadow: '1px 1px 3px gray', backgroundColor: 'red', color: 'white'}} onClick={ConfirmDisableMerchant}>DISABLE MERCHANT</Button>
                            </Stack>
                        </ModalFooter>
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
}

export function CreateTerminalForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ChakraProvider>
            <Button onClick={onOpen} leftIcon={<FiPlusCircle />} colorScheme="teal" variant='solid' w='50%'  >New Terminal</Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Terminal Definition</ModalHeader>
                    <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Terminal ID</FormLabel>
                                <Input placeholder="Input Terminal ID" />
                                <FormLabel mt={2}>Merchant</FormLabel>
                                <Select placeholder="Select Merchant Holder" >
                                    {merchantList.map(list => (
                                        <option value={list.merchantName} style={{ marginTop: '50px' }}>{list.merchantName}</option>
                                    ))}
                                </Select>
                                <FormLabel mt={2}>Terminal Type</FormLabel>
                                <Select placeholder="Select Terminal Type">
                                    <option>Regular/Sale</option>
                                    <option>Cashout Sale</option>
                                </Select>
                                <FormLabel mt={2}>Serial Number</FormLabel>
                                <Input placeholder="Input Serial Number" />
                            </FormControl>             
                        </ModalBody>
                       <ModalFooter>
                            <Stack direction='row' w='100%'>
                                <Button bg='blue.300' w='50%' _hover={{ backgroundColor: 'blue', color: 'white' }}>Save Terminal</Button>
                                <Button bg='red.300' w='50%' _hover={{ backgroundColor: 'red', color: 'white' }} onClick={onClose}>Cancel</Button>
                            </Stack>
                       </ModalFooter>
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
}

export function ViewTerminalInformation() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function ConfirmDisableTerminal() {
        let confirmation = 'You\'re about to disable this terminal!\n Are your sure want to disable.';
        if(window.confirm(confirmation) === true) {
            alert('Terminal Disabled');
        }
    }

    return(
        <ChakraProvider>
            <Button onClick={onOpen} colorScheme="teal" w='10%' borderRadius='50%' >
                <FiEye fontSize='20px'/>
            </Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size='lg'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Terminal Information</ModalHeader>
                    <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Terminal ID</FormLabel>
                                <Input value='0000000902' readOnly/> 
                                <FormLabel mt={2}>Merchant Holder</FormLabel>
                                <Input value='Merchant 01' readOnly/>
                                <FormLabel mt={2}>Terminal Type</FormLabel>
                                <Input value='Regular Cashout' readOnly/>
                                <FormLabel mt={2}>Serial Number</FormLabel>
                                <Input value='000124354' readOnly/>
                                {/* <Box bg='' mt={5}>
                                    <Button bg='red.500' mr={3} type="submit" _hover={{ boxShadow: '1px 1px 3px gray' }}>Disable Merchant</Button>
                                </Box> */}
                            </FormControl>  
                        </ModalBody>
                        <ModalFooter>
                            <Stack direction='row' justifyContent='space-between' w='100%' p={2}>
                                <Button bg='green.300' type='submit' mr={3} _hover={{ boxShadow: '1px 1px 3px gray', backgroundColor: 'green', color: 'white'}} onClick={onClose}>UPDATE TERMINAL</Button>
                                <Button bg='red.300' type='submit' mr={3} _hover={{ boxShadow: '1px 1px 3px gray', backgroundColor: 'red', color: 'white'}} onClick={ConfirmDisableTerminal}>DISABLE TERMINAL</Button>
                            </Stack>
                        </ModalFooter>
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
}

export function ViewTransactionInformation() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <ChakraProvider>
            <Button onClick={onOpen} colorScheme="teal" w='10%' borderRadius='50%' >
                <FiEye fontSize='20px'/>
            </Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size='lg'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Transaction Information</ModalHeader>
                    <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Account Number</FormLabel>
                                <Input value='4545************3431' readOnly/> 
                                <FormLabel mt={2}>Referrence</FormLabel>
                                <Input value='3421232' readOnly/>
                                <FormLabel mt={2}>Amount</FormLabel>
                                <Input value='1000' readOnly/>
                                <FormLabel mt={2}>Response Code</FormLabel>
                                <Input value='00' readOnly/>
                                <FormLabel mt={2}>Status</FormLabel>
                                <Input value='Success' readOnly/>
                                <FormLabel mt={2}>Merchant Name</FormLabel>
                                <Input value='Merchant 01' readOnly/>
                                <FormLabel mt={2}>Terminal ID</FormLabel>
                                <Input value='000000000901' readOnly/>
                                <FormLabel mt={2}>Date Transacted</FormLabel>
                                <Input value='2023-07-01 00:00:00' readOnly/>
                            </FormControl>  
                        </ModalBody>
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
}

export function ViewAccountInformation() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function ConfirmDisableAccount() {
        let confirmation = 'You\'re about to disable this account!\n Are your sure want to disable.';
        if(window.confirm(confirmation) === true) {
            alert('Account Disabled');
        }
    }

    return(
        <ChakraProvider>
            <Button onClick={onOpen} colorScheme="teal" w='10%' borderRadius='50%' >
                <FiEye fontSize='20px'/>
            </Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size='lg'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Account Information</ModalHeader>
                    <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Firstname</FormLabel>
                                <Input value='Juan' readOnly/> 
                                <FormLabel mt={2}>Lastname</FormLabel>
                                <Input value='Dela Cruz' readOnly/>
                                <FormLabel mt={2}>Username</FormLabel>
                                <Input value='1000' readOnly/>
                                <FormLabel mt={2}>Access Type</FormLabel>
                                <Input value='Admin' readOnly/>
                            </FormControl>  
                        </ModalBody>
                        <ModalFooter>
                            <Stack direction='row' justifyContent='space-between' w='100%' p={2}>
                                <Button bg='green.300' type='submit' mr={3} _hover={{ boxShadow: '1px 1px 3px gray', backgroundColor: 'green', color: 'white'}} onClick={onClose}>UPDATE ACCOUNT</Button>
                                <Button bg='red.300' type='submit' mr={3} _hover={{ boxShadow: '1px 1px 3px gray', backgroundColor: 'red', color: 'white'}} onClick={ConfirmDisableAccount}>DISABLE ACCOUNT</Button>
                            </Stack>
                        </ModalFooter>
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
}

export function CreateAccountForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ChakraProvider>
            <Button onClick={onOpen} leftIcon={<FiPlusCircle />} colorScheme="teal" variant='solid' w='30%' ml={2} >New Account</Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Account Definition</ModalHeader>
                    <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Firstname</FormLabel>
                                <Input placeholder="Input Firstname" />
                                <FormLabel mt={2}>Lastname</FormLabel>
                                <Input placeholder="Input Lastname" />
                                <FormLabel mt={2}>Email Address</FormLabel>
                                <Input placeholder="Input email address" />
                                <FormLabel mt={2}>Access Type</FormLabel>
                                <Select placeholder="Select Type">
                                    <option>DBP Admin</option>
                                    <option>DBP Support</option>
                                    <option>DBP Merchant</option>
                                </Select>
                                <FormLabel mt={2}>Username</FormLabel>
                                <Input placeholder="Input Username" />
                                <FormLabel mt={2}>Password</FormLabel>
                                <Input placeholder="Input Password" />
                                <FormLabel mt={2}>Confirm Password</FormLabel>
                                <Input placeholder="Confirm your Password" />
                            </FormControl>             
                        </ModalBody>
                       <ModalFooter>
                            <Stack direction='row' w='100%'>
                                <Button bg='blue.300' w='50%' _hover={{ backgroundColor: 'blue', color: 'white' }}>Save Account</Button>
                                <Button bg='red.300' w='50%' _hover={{ backgroundColor: 'red', color: 'white' }} onClick={onClose}>Cancel</Button>
                            </Stack>
                       </ModalFooter>
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
}
