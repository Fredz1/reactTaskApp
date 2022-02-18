const express = require('express')
const { json, urlencoded } = require('express')
const server = express()
const dbConnect = require('./config/mongooseConnect.js')
const morgan = require('morgan')
require('dotenv').config()
const { checkLoginStatus } = require('./middleware/jwtProtect')

// connect to mongoDB
dbConnect()

// middleware
server.use(json())
server.use(urlencoded({ extended: true }))
server.use(morgan('dev'))


// Route any user request to controler/files
server.use(
  '/api/user',
  require('./routes/user')
)

/* 
  Protected route as all request to view or modify tasks must require user to be logged in.
  The user gets an auth token sent to them when user logs in via /api/user route
*/
server.use(
  '/api/tasks',
  checkLoginStatus,
  require('./routes/tasks')
)


server.listen(
  process.env.PORT,
  () => {
    console.log(`Server running on port:${process.env.PORT}`)
  }
)
