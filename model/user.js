const mongoose = require('mongoose')

const user = new mongoose.Schema(
  {
    userNum: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    tasks: [
      
    ]
  },
  {
    collection: 'Task9'
  }
)

module.exports = mongoose.model('user', user)