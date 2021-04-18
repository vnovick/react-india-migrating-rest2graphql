const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const jsonServer = require('json-server')
const cors = require('cors')

const app = express()

///////////Here we will start GraphQL implementation

// Construct a schema, using GraphQL schema language

// TODO: 1. Write GraphQL Schema definition by defining root level Query type with one single hello query that will return a String
// TODO: 2. add resolver for hello query that will return "Hello GraphQL"
// TODO: 3. create a new ApolloServer providing it type definitions just defined
// TODO: 4. add mocks: true to ApolloServer to make sure we are able to get unimplemented resolvers through mocks. Make sure to also add mockEntireSchema: false

//////////////// End of GraphQL section

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors())

//----------------------------------------------------

// JSON server mocks

app.use('/api', jsonServer.router('db.json'))

//----------------------------------------------------

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json(err)
})

module.exports = app
