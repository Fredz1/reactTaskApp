const user = require('../model/user.js')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')


// Add a register/add new user to db
const addUser = async input => {
  try{

    // check for duplicates
    const exitingUser = await user.findOne({email: input.email})
    if(exitingUser) throw 'existing'

    // create unique userID and hash the password
    input.userNum = uuidv4()
    input.password = await bcrypt.hash(input.password, 10)

    // create userInput and save to DB
    const newUser = await new user(input)
    const add = await newUser.save()

    // null is returned by mongoDB if problems saving client.
    if(!add) throw 'db error'

    return 'saved'

  }catch(e){
    return e
  }
  
}

// Login user
const loginUser = async input => {
  try{
    // Destructure password and _id user exists else error is returned and handled in the catch block
    const { password, _id } = await user.findOne( { email:input.email } )
  
    return {password, _id}

  } catch(e){
    // send error to route to handle the result
    return 'no user found'
  }

}

/* 
  Get tasks from DB
  Desc: destructure  tasks from request as nothing else is needed in this function
*/
const getUserTasks = async id => {
  
  const { tasks } = await user.findById(id)

  return tasks
}

/* 
  Desc: this only updates task list.  All manipulation is done in the route
*/
const updateTasks = async (id, task) => {
  const { tasks } = await user.findByIdAndUpdate(
    id, 
    // only update the tasks field
    {'tasks': task},
    // set request to return the updated document
    {
      new: true
    }
  )

  // returns updated task list to route 
  return tasks
}

// Export functions
module.exports = {addUser, loginUser, getUserTasks, updateTasks}