# Exercise 9 - Change Frontend to consume GraphQL

## Background

```sh
cd api
npm install

cd frontend
npm install
```

#### Files

These files should be modified during exercise. They also include **TODO**
comments for your convenience

- `frontend/App.js`
- `frontend/src/pages/ProfilePage.js`
- `frontend/src/pages/PostPage.js`
- `frontend/src/components/Post.js`
- `api/typeDefs/query`
- `api/resolvers/authorsResolvers`

## Instructions

In this exercise we will migrate our client to GraphQL

**Steps:**

#### Backend

1. Define `authors` root query in `query.js` that accepts `userId` and
   `legacyUserId`
2. Create a resolver in `authorsResolvers.js` that will get user by Id (Tip:
   Think about resolver resolution order and the best way to change fields
   resolution)

#### Client

3. Create Apollo Client in `frontend/src/App.js` and wrap our app with
   `ApolloProvider` passing client instance

```
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});
```

4. define `getPosts` query using `gql` in `frontend/src/pages/PostsPage.js`
5. Use `useQuery` hook to retrieve `data`, `error` and `loading` states
6. Change the page to show different UI based on the state (Spinner for loading,
   error for error and posts when data is resolved)
7. Make sure you retrieve the correct data at `Post.js` component

### Home Assignment

1. Add Error Handling to your API
   (https://www.apollographql.com/docs/apollo-server/data/errors/)
2. Create `getPostById` query and implement `Post` page
