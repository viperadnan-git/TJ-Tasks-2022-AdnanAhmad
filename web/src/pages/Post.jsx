import { Box, Container, Divider, HStack, Heading, Image, VStack } from "@chakra-ui/react";

import Output from "editorjs-react-renderer";
import fetcher from "../utils/fetcher";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Post() {
    const [post, setPost] = useState(false);
    const {postid} = useParams();

    useEffect(() => {
        (async () => {
            if (!post) {
                const post = await fetcher({ url: "/api/post/"+ postid});
                setPost(post);
            }
        })();
    }, []);

    return (
        <Container maxW="6xl">
            <VStack justify="center" my="5">

            {post.image && <Image borderRadius="2xl" src={post.image} alt={post.title}></Image>}
            </VStack>
            <Heading size="3xl" my="5">{post.title}</Heading>
            <Divider border="4px"></Divider>
            <Output
                data={post.data}
                style={{
                    header: {
                        h2: {
                            fontWeight:"bold",
                            fontSize:"28px"
                        },
                        textAlign: "left",
                        margin: "10px 20px",
                    },
                    paragraph: {
                        fontSize: "16px",
                    },
                }}
            ></Output>
        </Container>
    );
}

export default Post;
