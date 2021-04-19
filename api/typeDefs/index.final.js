const {query} = require('./query.final')
const {mutation} = require('./mutation')
const {postType, authorType} = require('./types')

const typeDefs = [query, mutation, postType, authorType]

module.exports = {
  typeDefs,
}
