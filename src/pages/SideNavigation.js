import { ChakraProvider, useColorModeValue, Box, Flex, Text, Icon,
         Wrap, WrapItem, Avatar} from "@chakra-ui/react";
import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings, FiMenu, FiTerminal} from 'react-icons/fi';
import Merchants from "./merchants";
import Dashboard from "./dashboard";
import Terminals from "./terminals";
import Transactions from "./transactions";
import Accounts from "./accounts";
import Reports from "./reports";
import './style.css';

const navStyle = {
    link: {
        textDecoration: 'none',
        boxShadow: 'none'
    },
    list: {
        align:"center",
        p:"4",
        mx:"4",
        borderRadius:"lg",
        role:"group",
        cursor:"pointer",
        _hover: {
            bg:'white.400',
            color: 'black',
            boxShadow: '2px 2px 5px gray'
        }
    }
    
}

const menuLinks = [
    { links: '/', name: 'Dashboard', icon: FiHome },
    { links: '/merchants', name: 'Merchants', icon: FiTrendingUp },
    { links: '/terminals', name: 'Terminals', icon: FiCompass },
    { links: '/transactions', name: 'Transactions', icon: FiTrendingUp },
    { links: '/accounts', name: 'Accounts', icon: FiTrendingUp },
    { links: '/reports', name: 'Reports', icon: FiTrendingUp },
    { links: '/logout', name: 'Logout', icon: FiTrendingUp }
  ];  

export default function SideNavigation() {
    return(
        <BrowserRouter>
            <ChakraProvider>
                <Flex w={{ md: '20%' }} minH='100vh' bg={useColorModeValue('cyan.400', 'gray.200')} pos='relative' boxShadow='2px 2px 5px gray'>
                    <Box 
                        w={{ md: 'inherit' }}
                        h='full'
                        pos="fixed"
                        bg={useColorModeValue('', 'red.300')}>
                            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                                    Payconnect
                                </Text>
                                {/* <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} /> */}
                            </Flex>
                            <Flex justifyContent='center' alignItems='center' w='83%' p='5px' bg='' pos='relative' flexDirection='column' >
                                <Wrap>
                                    <WrapItem>
                                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                    </WrapItem>
                                </Wrap>
                                <Text>Admin</Text>
                            </Flex>
                            
                            {menuLinks.map(link => (
                                <Link to={link.links} key={link.name}>
                                    <Flex className="list">
                                       <Icon as={link.icon} className="icons"/> {link.name}
                                    </Flex>
                                </Link>
                            ))}
                    </Box>
                </Flex>
                <Outlet />
            </ChakraProvider>

            <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/merchants' element={<Merchants />}/>
                <Route path='/terminals' element={<Terminals />}/>
                <Route path='/transactions' element={<Transactions />}/>
                <Route path='/accounts' element={<Accounts />}/>
                <Route path='/reports' element={<Reports />}/>
            </Routes>
        </BrowserRouter>
    );
}
