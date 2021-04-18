import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Divider,
  HStack,
  Text,
  Link,
  VStack,
} from '@chakra-ui/react';
import { useParams, Link as NavLink } from '@reach/router';

export function ProfilePage() {
  const [author, setAuthor] = useState({});
  let { userId } = useParams();

  useEffect(() => {
    async function getAuthor() {
      const result = await fetch(`http://localhost:3001/api/authors/${userId}`);
      const author = await result.json();
      setAuthor(author);
    }
    getAuthor();
  }, [userId]);
  return (
    <Box key={author.id} p={4} display={{ md: 'flex' }} boxShadow="dark-lg">
      <Box flexShrink="0">
        <Image
          rounded="lg"
          width={{ md: 150 }}
          src={author.avatarUrl}
          alt="Dummy image"
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <VStack spacing={8}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            {author.name}
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            {author.title}
          </Link>
          <Text mt={2} color="gray.500">
            {author.bio}
          </Text>
          <Divider />
          <HStack>
            <Box>
              <Text mt={3}>
                <Link fontWeight="semibold">Email:</Link> {author.email}
              </Text>
            </Box>
            <Box>
              <Text mt={3}>
                <Link fontWeight="semibold">Twitter: </Link>
                {author.twitter}
              </Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
      <NavLink to="/">Back</NavLink>
    </Box>
  );
}
