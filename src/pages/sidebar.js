import {
  IconButton, Box, CloseButton, Flex, Icon,
  useColorModeValue, Link, Drawer, DrawerContent,
  Text, useDisclosure, ChakraProvider
} from '@chakra-ui/react';
import {
  FiHome, FiTrendingUp, FiCompass, FiStar,
  FiSettings, FiMenu,
} from 'react-icons/fi';
import Dashboard from './dashboard';

const menuLinks = [
  { name: 'Dashboard', icon: FiHome },
  { name: 'Merchants', icon: FiTrendingUp },
  { name: 'Terminals', icon: FiCompass },
  { name: 'Transactions', icon: FiTrendingUp },
  { name: 'Accounts', icon: FiStar },
  { name: 'Reports', icon: FiSettings },
  { name: 'Settings', icon: FiSettings },
];    

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <ChakraProvider >
        <Box minH="100vh" bg={useColorModeValue('red.100', 'red.900')}>
          <SidebarContent
            onClose={() => onClose}
            display={{ base: 'none', md: 'block' }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full">
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
          
        </Box>
      </ChakraProvider>
  );
}

function SidebarContent({ onClose, ...rest }) {
  return (
    <Box
      bg={useColorModeValue('', 'red.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.500', 'red.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Payconnect
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {menuLinks.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

function NavItem({ icon, children, ...rest }) {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'black',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

function MobileNav({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};