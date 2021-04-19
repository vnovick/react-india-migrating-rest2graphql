const {gql} = require('apollo-server-express')

const authorType = gql`
  input AuthorInputType {
    name: String!
    avatarUrl: String!
  }
  type Author {
    id: ID!
    bio: String
    twitter: String
    name: String
    email: String
    avatarUrl: String
  }
`

module.exports = {
  authorType,
}
