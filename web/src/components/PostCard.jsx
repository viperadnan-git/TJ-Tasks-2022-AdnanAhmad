import { Avatar, Box, Center, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import Output from "editorjs-react-renderer";
import redableTime from "../utils/redableTime";
import { useNavigate } from "react-router-dom";

function PostCard(props) {
    const navigate = useNavigate();
    
    return (
        <Center py={6}>
            <Box maxW={"445px"} w={"full"} bg={useColorModeValue("white", "gray.900")} boxShadow={"2xl"} rounded={"md"} p={6} overflow={"hidden"}>
                {props.image && (
                    <Box bg={"gray.100"} mt={-6} mx={-6} mb={6}>
                        <Image src={props.image} />
                    </Box>
                )}
                <Stack>
                    <Text color={"green.500"} textTransform={"uppercase"} fontWeight={800} fontSize={"sm"} letterSpacing={1.1}>
                        Blog
                    </Text>
                    <Heading onClick={()=>navigate("/post/"+props.id)} color={useColorModeValue("gray.700", "white")} fontSize={"2xl"} fontFamily={"body"}>
                        {props.title}
                    </Heading>
                    <Heading as="p" size="sm" fontWeight="normal" noOfLines={4}>
                        <Output data={props.data}></Output>
                    </Heading>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                    <Avatar name={props.author.name} src={props.author.avatar} alt={"Author"} />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                        <Text fontWeight={600}>{props.author.name}</Text>
                        <Text color={"gray.500"}>{redableTime(props.createdAt)}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}

export default PostCard;
