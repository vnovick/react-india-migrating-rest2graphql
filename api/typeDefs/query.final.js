const {gql} = require('apollo-server-express')

const query = gql`
  enum ORDER {
    ASC
    DESC
  }
  type Query {
    hello: String
    author(userId: ID, legacyUserId: Int): Author
    posts(order: ORDER, limit: Int): [Post]
  }
`

module.exports = {
  query,
}
