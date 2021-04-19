import React from 'react';
import {
  Box,
  Image,
  Divider,
  HStack,
  Text,
  Link,
  VStack,
  Spinner,
} from '@chakra-ui/react';
import { useParams, Link as NavLink } from '@reach/router';
import { useQuery, gql } from '@apollo/client';

const GET_AUTHOR = gql`
  query getAuthor($userId: ID, $legacyUserId: Int) {
    author(userId: $userId, legacyUserId: $legacyUserId) {
      id
      avatarUrl
      name
      bio
      twitter
      email
    }
  }
`;

export function ProfilePage() {
  let { userId } = useParams();
  const { data, loading, error } = useQuery(GET_AUTHOR, {
    variables: {
      legacyUserId: +userId,
    },
  });
  return loading ? (
    <Spinner />
  ) : error ? (
    <pre>{JSON.stringify(error)}</pre>
  ) : (
    <Box
      key={data.author.id}
      p={4}
      display={{ md: 'flex' }}
      boxShadow="dark-lg"
    >
      <Box flexShrink="0">
        <Image
          rounded="lg"
          width={{ md: 150 }}
          src={data.author.avatarUrl}
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
            {data.author.name}
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            {data.author.title}
          </Link>
          <Text mt={2} color="gray.500">
            {data.author.bio}
          </Text>
          <Divider />
          <HStack>
            <Box>
              <Text mt={3}>
                <Link fontWeight="semibold">Email:</Link> {data.author.email}
              </Text>
            </Box>
            <Box>
              <Text mt={3}>
                <Link fontWeight="semibold">Twitter: </Link>
                {data.author.twitter}
              </Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
      <NavLink to="/">Back</NavLink>
    </Box>
  );
}
