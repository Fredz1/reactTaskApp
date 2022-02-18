const mongoose = require('mongoose')
require('dotenv').config()

// Connect to my mongo cloud.  Specifically the Database I created for HyperionDev projects
const dbConnect = async () => {
  try{
    mongoose.connect(
      process.env.MONGO_URI,
      () => {
        console.log(`Mongo connected to cloud`)
      }
    )
  } catch(error){
    console.error(`Database connection error: ${error}`)
  }
}

module.exports = dbConnect