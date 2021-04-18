import React from 'react';
import { ChakraProvider, theme, Box, VStack, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Router } from '@reach/router';
import { PostsPage, ProfilePage } from './pages';

function App() {
  return (
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
  );
}

export default App;
