const {gql} = require('apollo-server-express')

// TODO: Add authors query to query authors by Id
const query = gql`
  enum ORDER {
    ASC
    DESC
  }
  type Query {
    hello: String
    posts(order: ORDER, limit: Int): [Post]
  }
`

module.exports = {
  query,
}
