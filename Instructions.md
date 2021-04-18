# Exercise 3 - GraphQL endpoint setup

## Background

```sh
cd api
npm install
```

Our `api` includes a new dependency:
[apollo-server-express](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express)

typically you install it by running

```sh
npm install apollo-server-express graphql --save
```

but I've included it in package.json already.

#### Files

These files will be modified during exercise. They also include TODO comments
for your convenience

- `api/app.js`

## Instructions

1. Write GraphQL Schema definition by defining root level `Query` type with one
   single `hello` query that will return a `String`

Example of how to write a schema:

```graphql
# A book has a title and an author
type Book {
  title: String
  author: Author
}

# An author has a name and a list of books
type Author {
  name: String
  books: [Book]
}
```

You define your data graph's supported queries as fields of a special type
called the Query type.

```javascript
const typeDefs = gql`
    type Query {
      #Your queries definition goes here
    }
`
```

2.add resolver for hello query that will return "Hello GraphQL"

```javascript
const resolvers = {
  Query: {
    // here will go your resolver function definition
    foo: () => 'bar',
  },
}
```

3. create a new ApolloServer providing it type definitions just defined

> Note: make sure to apply middleware before any app.use

```javascript
const {ApolloServer, gql} = require('apollo-server-express')

const server = new ApolloServer({typeDefs, resolvers})
server.applyMiddleware({app})
```

4. add `mocks: true` to ApolloServer to make sure we are able to get
   unimplemented resolvers through mocks. Make sure to also add
   `mockEntireSchema: false`

#### Bonus Excercise

5. Add the following resolver to resolver definition.

```
    helloWithMessage: (_, {message}) => message,
```

The server will crash cause there is no schema definition for it. Your task is
to define proper schema for it. Note that `message` is an argument
