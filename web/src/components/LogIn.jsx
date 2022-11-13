import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Heading, Input, Stack, Text, useBreakpointValue, useColorModeValue, useToast } from "@chakra-ui/react";

import { PasswordField } from "../components/PasswordField";
import fetcher from "../utils/fetcher";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LogIn() {
    const navigate = useNavigate();
    const toast = useToast({
        position: "top",
        duration: 2000,
    });
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginHandler = async () => {
        await fetcher({ url: "/api/login", params: { email: email, password: password } })
            .then((data) => {
                localStorage.TOKEN = data.token;
                localStorage.ID = data.id;
                toast({
                    title: "Login Successfull",
                    description: "taking you to the dashboard",
                    status: "success",
                });
                navigate("/trends");
            })
            .catch((error) => {
                toast({
                    title: "Oops",
                    description: error.toString(),
                    status: "error",
                });
            });
    };

    return (
        <Stack spacing="8">
            <Stack spacing="6">
                <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                    <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>Log in to your account</Heading>
                    <HStack spacing="1" justify="center">
                        <Text color="muted">Don't have an account?</Text>
                        <Button variant="link" colorScheme="blue">
                            Sign up
                        </Button>
                    </HStack>
                </Stack>
            </Stack>
            <Box
                py={{ base: "0", sm: "8" }}
                px={{ base: "4", sm: "10" }}
                bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
                boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
                borderRadius={{ base: "none", sm: "xl" }}
            >
                <Stack spacing="6">
                    <Stack spacing="5">
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input id="email" type="email" onChange={(event) => setEmail(event.target.value)} />
                        </FormControl>
                        <PasswordField onChange={(event) => setPassword(event.target.value)} />
                    </Stack>
                    <HStack justify="space-between">
                        <Checkbox defaultChecked>Remember me</Checkbox>
                        <Button variant="link" colorScheme="blue" size="sm">
                            Forgot password?
                        </Button>
                    </HStack>
                    <Stack spacing="6">
                        <Button colorScheme="blue" onClick={loginHandler}>
                            Sign in
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    );
}

export default LogIn;
