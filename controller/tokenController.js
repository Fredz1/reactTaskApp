const jwt = require('jsonwebtoken')
require('dotenv').config()

const newToken = input => {
  const data = jwt.sign(
    {'id': input},
    process.env.JWT_SECRET
  )

  return data
}



module.exports = {newToken}
