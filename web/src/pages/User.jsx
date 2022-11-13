import { Container, SimpleGrid, Skeleton, Spinner, Stack } from "@chakra-ui/react";

import PostCard from "../components/PostCard";
import fetcher from "../utils/fetcher";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function User() {
    const [posts, setPosts] = useState([]);
    let { userid } = useParams();
    useEffect(() => {
        (async () => {
            if (!posts.length) {
                const data = await fetcher({ url: "/api/user/" + userid });
                setPosts(data.posts);
            }
        })();
    }, []);

    return (
        <Container maxW="8xl" bg="#EFF5F5" py="12">
            {posts.length ? (
                <SimpleGrid columns={["1", "1", "2", "3"]}>
                    {posts.map((post) => {
                        return <PostCard key={post.id} {...post} />;
                    })}
                </SimpleGrid>
            ) : (
                <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
              </Stack>
            )}
        </Container>
    );
}

export default User;
