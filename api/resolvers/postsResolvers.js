const fetch = require('node-fetch')

const dummyData = [
  {
    id: 8,
    title: 'Post One',
    content: 'text',
  },
  {
    id: 6,
    title: 'Post Two',
    content: 'text',
  },
  {
    id: 2,
    title: 'Post Three',
    content: 'text',
  },
  {
    id: 5,
    title: 'Post Four',
    content: 'text',
  },
]

// Sorting helper function to sort either ASC or DESC
const sort = (data, sortingKey, order) =>
  data.sort(
    order === 'ASC'
      ? (a, b) => a[sortingKey] - b[sortingKey]
      : (a, b) => b[sortingKey] - a[sortingKey],
  )

// Limit helper function to accept data and limit number
const limit = (data, limit) => data.slice(0, limit)

const postsResolvers = {
  Query: {
    posts: (obj, args, context) => {
      const posts = args.order ? sort(dummyData, 'id', args.order) : dummyData
      const limitedPosts = args.limit ? limit(posts, args.limit) : posts
      return limitedPosts
      //TODO: Load data from http://localhost:3001/api/posts. Use `async` resolver for that
    },
  },
}

module.exports = {
  postsResolvers,
}
