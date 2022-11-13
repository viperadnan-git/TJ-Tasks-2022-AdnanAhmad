import { Container, Flex, Heading, Highlight, SimpleGrid } from "@chakra-ui/react";

import LogIn from "../components/LogIn";

function Home(props) {
    return (
        <Flex as="main" role="main" direction="column" flex="1" py="16" bg="#EFF5F5">
            <Container maxW="7xl" flex="1">
                <SimpleGrid columns={["1", null, "2"]} spacing={12}>
                    <Heading as="h1" size="4xl">
                        <Highlight query="blogging" styles={{ px: "2", py: "1", rounded: "full", bg: "#EB6440" }}>
                            Let's make blogging fun again, open-source and free for ever.
                        </Highlight>
                    </Heading>
                    <LogIn></LogIn>
                </SimpleGrid>
            </Container>
        </Flex>
    );
}

export default Home;
