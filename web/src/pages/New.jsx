import { Box, Button, Container, Divider, Flex, FormControl, FormLabel, HStack, Input, Stack, useToast } from "@chakra-ui/react";
import { DEFAULT_VALUE, EDITOR_JS_TOOLS } from "../utils/editorTools";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useRef } from "react";

import { createReactEditorJS } from "react-editor-js";
import fetcher from "../utils/fetcher";
import { useState } from "react";

const ReactEditorJS = createReactEditorJS();

function New() {
    const toast = useToast({
        position: "top",
        duration: 2000,
    });
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const navigate = useNavigate();
    const editorCore = useRef(null);

    document.title = "New - " + title
    const handleInitialize = useCallback((instance) => {
        editorCore.current = instance;
    }, []);

    const handleSave = async () => {
        const savedData = await editorCore.current.save();
        console.log(title);
        await fetcher({
            url: "/api/new",
            json: {
                title: title,
                data: savedData,
                image: image,
            },
        })
            .then((data) => {
                navigate("/post/" + data.id);
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
        <Flex as="main" role="main" direction="column" flex="1" py="8" bg="#EFF5F5">
            <Container maxW="7xl" >
                <Stack direction={["column", "row"]} >
                    <FormControl>
                        <FormLabel>Post Title</FormLabel>
                        <Input placeholder="Give it a cool title" variant="flushed" onChange={(event) => setTitle(event.target.value)}></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Banner Image Link</FormLabel>
                        <Input placeholder="Image Link" variant="flushed" onChange={(event) => setImage(event.target.value)}></Input>
                    </FormControl>
                    <HStack>
                        <Button>
                            <Link to="/trends">Cancel</Link>
                        </Button>
                        <Button colorScheme="green" onClick={handleSave}>
                            Publish
                        </Button>
                    </HStack>
                </Stack>
            </Container>
            <Divider my={5}></Divider>
            <Container maxW="8xl" style={{ h1: "" }}>
                <ReactEditorJS onInitialize={handleInitialize} tools={EDITOR_JS_TOOLS} defaultValue={DEFAULT_VALUE} />
            </Container>
            <Divider my={5}></Divider>
        </Flex>
    );
}

export default New;
