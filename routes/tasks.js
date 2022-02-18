const router = require('express').Router()
const { getUserTasks, updateTasks } = require('../controller/dbController')

/* 
  NOTE: req.body.id is set in jwtController on successful validation.
  any failure to verify user is handled in the middleware.
*/


/* 
  Retrieve user tasks from db
*/
router.get(
  '/retrieve',
  async (req, res) => {

    // the dbController only returns the tasks
    const tasks = await getUserTasks(req.body.id)

    // send list
    res.send(tasks)
  }
)

/* 
  Add a task
*/
router.post(
  '/addTask',
  async (req, res) => {
    try{
      // get list of current tasks will  return empty array if there are  none
      const tasks = await getUserTasks(req.body.id)

      /* 
        send userID to updateDB
        spread the newtask with the existing tasks in single array in the update function call
      */
      const updateDB = await updateTasks(req.body.id, [...tasks, req.body.taskName])
      
      // any errors will be handled by catch block
      res.send(updateDB)
    } catch(e){
      res.send('cannot update db')
    }
    
  }
)

/* 
  Desc: find and remove a task from list
*/
router.post(
  '/deleteTask',
  async (req, res) => {
    // request tasks from DBcontroller
    const tasks = await getUserTasks(req.body.id)

    // we find the 1st  index which matchs item sent in the request
    const index = tasks.findIndex(el => el === req.body.item)

    // remove the item from the array 
    tasks.splice(index, 1)

    // set the updated array back in DB
    const updateDB = await updateTasks(req.body.id, [...tasks])
    res.send(updateDB)
  }
)

module.exports = router
