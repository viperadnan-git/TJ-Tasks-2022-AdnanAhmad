import { Box, ButtonGroup, Container, IconButton, Stack, Text } from "@chakra-ui/react";

import { GithubIcon } from "../assets/icons/GithubIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { MoodiumIcon } from "../assets/icons/MoodiumIcon";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

function Footer() {
    return (
        <Box as="footer" role="contentinfo">
            <Container maxW="8xl" as="footer" role="contentinfo" py={{ base: "4"}}>
                <Stack spacing={{ base: "4", md: "5" }}>
                    <Stack justify="space-between" direction={["column", "column", "row"]} align="center">
                        <MoodiumIcon size="120" />
                        <ButtonGroup variant="ghost">
                            <IconButton as="a" href="#" aria-label="GitHub" icon={<GithubIcon fontSize="1.25rem" />} />
                            <IconButton as="a" href="#" aria-label="LinkedIn" icon={<InstagramIcon fontSize="1.25rem" />} />
                            <IconButton as="a" href="#" aria-label="Twitter" icon={<TwitterIcon fontSize="1.25rem" />} />
                        </ButtonGroup>
                        <Text fontSize="sm" color="subtle">
                            &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;
