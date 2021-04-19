import React from 'react';
import { ChakraProvider, theme, Box, VStack, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Router } from '@reach/router';
import { PostsPage, ProfilePage } from './pages/index.final';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <Router>
                <PostsPage path="/" exact />
                <ProfilePage path="/users/:userId" />
              </Router>
            </VStack>
          </Grid>
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
