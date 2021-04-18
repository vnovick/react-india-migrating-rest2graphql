const {DataSource} = require('apollo-datasource')
const {InMemoryLRUCache} = require('apollo-server-caching')
const path = require('path')
const fs = require('fs')
const util = require('util')
const {v4: uuidv4} = require('uuid')

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile)

const writeFile = util.promisify(fs.writeFile)

const CACHE_KEY = 'postsJsonCache'

const filterOutKey = (input, keyToFilter) =>
  Object.keys(input).reduce((acc, key) => {
    if (key === keyToFilter) {
      return acc
    }
    return {
      ...acc,
      [key]: input[key],
    }
  }, {})

class PostsJsonDataSource extends DataSource {
  constructor() {
    super()
    // Creating InMemoryCache
    this.keyValueCache = new InMemoryLRUCache()
    this.jsonDbPath = path.resolve(__dirname, '../db.json')
  }

  // caching

  async readFromCache(key) {
    const cache = await this.keyValueCache.get(CACHE_KEY)
    if (!cache) {
      console.log(`File access for${key}`)
      const result = await readFile(this.jsonDbPath)
      const parsedResult = JSON.parse(result)
      await this.keyValueCache.set(CACHE_KEY, parsedResult)
      return parsedResult
    }
    return cache
  }

  //Caching our json file and limiting access to file
  async get(key) {
    const result = await this.readFromCache(key)
    return result[key]
  }

  async add(key, data) {
    const result = await this.readFromCache(key)
    result[key].push(data)
    writeFile(this.jsonDbPath, JSON.stringify(result, null, 2))
    await this.keyValueCache.set(CACHE_KEY, result)
    return data
  }

  async getPosts() {
    const posts = await this.get(`posts`)
    return posts
  }

  async getAuthorById(id) {
    const authors = await this.get(`authors`)
    return authors.filter((author) => author.id === id)[0]
  }

  async insertAuthor(input) {
    const author = {
      id: uuidv4(),
      ...input,
    }
    await this.add('authors', author)
    return author
  }

  async insertPost(input) {
    const post = {
      id: uuidv4(),
      // ------------Extra credit 1 ------
      // authorId: input.authorIdLegacy,
      // ...filterOutKey(input, 'authorIdLegacy'),
      ...input,
    }
    if (input.authorId) {
      return await this.add('posts', post)
    }
    // ------------Extra credit 1 ------
    // if (input.authorId || input.authorIdLegacy) {
    //   return await this.add('posts', post)
    // }
    // ----------- Extra credit 2 -------
    // if (input.author) {
    //   const author = await this.insertAuthor(input.author)
    //   const insertPost = await this.add('posts', {
    //     ...filterOutKey(post, 'author'),
    //     authorId: author.id,
    //   })
    //   return insertPost
    // }
    throw new Error('no author Id provided')
  }
}

module.exports = {
  PostsJsonDataSource,
}
