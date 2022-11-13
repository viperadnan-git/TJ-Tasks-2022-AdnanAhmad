import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    VStack,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { MenuIcon } from "../assets/icons/MenuIcon";
import { MoodiumIcon } from "../assets/icons/MoodiumIcon";
import { useRef } from "react";

function Navbar() {
    const navigate = useNavigate();
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const isLoggedIn = localStorage.TOKEN ? true : false;

    return (
        <Box as="nav" bg="#D6E4E5" boxShadow={useColorModeValue("sm", "sm-dark")}>
            <Container maxW="7xl" py={{ base: "4", lg: "5" }}>
                <HStack spacing="10" justify="space-between">
                    <MoodiumIcon />
                    {isDesktop ? (
                        <Flex justify="space-between" flex="1">
                            <ButtonGroup variant="ghost" spacing="8">
                                <Button variant="ghost" onClick={() => navigate("/trends")}>
                                    Trendings
                                </Button>
                                {isLoggedIn && (
                                    <Button variant="ghost" onClick={() => navigate("/user/" + localStorage.ID)}>
                                        My Posts
                                    </Button>
                                )}
                            </ButtonGroup>
                            {isLoggedIn ? (
                                <HStack spacing="3">
                                    <Button variant="ghost" onClick={() => navigate("/new")}>
                                        New
                                    </Button>
                                    <Button variant="ghost" onClick={() => navigate("/new")}>
                                        Settings
                                    </Button>
                                </HStack>
                            ) : (
                                <HStack spacing="3">
                                    <Button variant="ghost">Sign In</Button>
                                    <Button variant="ghost">Sign up</Button>
                                </HStack>
                            )}
                        </Flex>
                    ) : (
                        <>
                            <IconButton variant="ghost" icon={<MenuIcon fontSize="1.25rem" />} onClick={onOpen} aria-label="Open Menu" />
                            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="xs">
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton />
                                    <DrawerHeader>Menu</DrawerHeader>

                                    <DrawerBody>
                                        <VStack spacing="3">
                                            <Link to="/trends">Trendings</Link>
                                            {isLoggedIn && <Link to={"/user/" + localStorage.ID}>My Posts</Link>}
                                        </VStack>
                                    </DrawerBody>
                                    <DrawerFooter>
                                        <Button colorScheme="blue" mr={3}>
                                            Sign in
                                        </Button>
                                        <Button colorScheme="blue">Sign up</Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </>
                    )}
                </HStack>
            </Container>
        </Box>
    );
}

export default Navbar;
