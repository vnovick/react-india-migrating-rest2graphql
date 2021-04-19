const fetchDataFromDataSource = async ({field, dataSource}, authorId) => {
  const result = await dataSource.getAuthorById(authorId)
  return result[field]
}

const authorsResolvers = {
  Query: {
    author: async (_, {userId, legacyUserId}, {dataSources}) => {
      return userId || legacyUserId
    },
  },
  Mutation: {
    insertAuthor: async (_, {input}, {dataSources}) => {
      return dataSources.postsJsonAPI.insertAuthor(input)
    },
  },
  Author: {
    name: async (authorId, args, {dataSources}) => {
      return fetchDataFromDataSource(
        {
          field: 'name',
          dataSource: dataSources.postsJsonAPI,
        },
        authorId,
      )
    },
    avatarUrl: async (authorId, args, {dataSources}) => {
      return fetchDataFromDataSource(
        {
          field: 'avatarUrl',
          dataSource: dataSources.postsJsonAPI,
        },
        authorId,
      )
    },
    bio: async (authorId, args, {dataSources}) => {
      return fetchDataFromDataSource(
        {
          field: 'bio',
          dataSource: dataSources.postsJsonAPI,
        },
        authorId,
      )
    },
    twitter: async (authorId, args, {dataSources}) => {
      return fetchDataFromDataSource(
        {
          field: 'twitter',
          dataSource: dataSources.postsJsonAPI,
        },
        authorId,
      )
    },
    email: async (authorId, args, {dataSources}) => {
      return fetchDataFromDataSource(
        {
          field: 'email',
          dataSource: dataSources.postsJsonAPI,
        },
        authorId,
      )
    },
    id: async (authorId, args, {dataSources}) => {
      return authorId
    },
  },
}

module.exports = {
  authorsResolvers,
}
