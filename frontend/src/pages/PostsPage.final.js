import React from 'react';
import { Box, Grid, Spinner } from '@chakra-ui/react';
import { Post } from '../components/Post.final';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query getPosts {
    posts(order: ASC) {
      title
      subTitle
      content
      featuredImage
      author {
        authorId: id
        name
        avatarUrl
      }
    }
  }
`;

export function PostsPage() {
  const { data, loading, error } = useQuery(GET_POSTS);

  return (
    <Box className="App">
      {loading ? (
        <Spinner />
      ) : error ? (
        <pre>{JSON.stringify(error)}</pre>
      ) : (
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {data.posts.map(Post)}
        </Grid>
      )}
    </Box>
  );
}
