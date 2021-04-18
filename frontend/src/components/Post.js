import {
  HStack,
  Divider,
  Avatar,
  Box,
  Text,
  Link,
  Image,
} from '@chakra-ui/react';
import { Link as NavLink } from '@reach/router';

export const Post = ({
  id,
  title,
  subTitle,
  content,
  featuredImage,
  name,
  authorId,
  avatarUrl,
}) => {
  return (
    <Box
      key={id}
      p={4}
      display={{ md: 'flex' }}
      boxShadow="dark-lg"
      rounded="lg"
    >
      <Box flexShrink="0">
        <Image
          rounded="lg"
          width={{ md: 40 }}
          fallbackSrc="https://via.placeholder.com/150"
          src={featuredImage}
          alt="Dummy image"
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          {title}
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          {subTitle}
        </Link>
        <Text mt={2} color="gray.500">
          {content}
        </Text>
        <Divider mt={4} />
        <Box mt={4}>
          <HStack>
            <NavLink to={`/users/${authorId}`}>
              <Avatar name="Dan Abrahmov" src={avatarUrl} />
            </NavLink>
            <Text mt={3}>{name}</Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
