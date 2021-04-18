# Exercise 2 - Explore GraphQL queries and mutations

#### Instructions

In this exercise you are not required to make any changes to the files, but more
exploring how you can query GraphQL endpoints

- Go to [https://graphiql-online.com/](https://graphiql-online.com/) and paste
  the following endpoint:
  `https://migrating-from-rest-to-graphql.herokuapp.com/v1/graphql` (This
  endpoint is already implemented GraphQL server)
- Explore Schema and docs

# Theory

[GraphQL Queries syntax](https://graphql.org/learn/queries/)

# Actual exercise

1. Query all the posts with the avatar URL
   [field](https://graphql.org/learn/queries/#fields) in one request
2. Order posts based ascending based on post title(use special
   [arguments](https://graphql.org/learn/queries/#arguments) provided for that
   in the schema). Represent data as `ordered_array` (hint:
   [aliases](https://graphql.org/learn/queries/#aliases))

Result should look like this:

```
    "ordered_array": [
      {
        "title": "Ex cupidatat laborum ipsum nulla minim duis anim.",
        "subTitle": "Veniam aliqua sit laboris laboris.",
        "author": {
          "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
        }
      }
    ]
```

3. Insert both `authors` and `posts` in the same mutation and make sure both are
   inserted.
4. Create reusable insert mutation called `addPost` from that mutation using
   [variable](https://graphql.org/learn/queries/#variables) of some
   [input type](https://graphql.org/learn/schema/#input-types).

Bonus Content 5. Use [Directives](https://graphql.org/learn/queries/#directives)
to include author avatar only if `$showAvatar` flag is passed as a variable
