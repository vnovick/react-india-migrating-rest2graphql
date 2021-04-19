const {postsResolvers} = require('../postsResolvers')
const {authorsResolvers} = require('./authorsResolvers.final')

const helloResolver = {
  Query: {
    hello: () => 'Hello GraphQL',
  },
}

const resolvers = [helloResolver, postsResolvers, authorsResolvers]

module.exports = {
  resolvers,
}
