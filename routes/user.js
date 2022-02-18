const route = require('express').Router()
const controller  = require('../controller/dbController')
const jwtController = require('../controller/tokenController')
const bcrypt = require('bcrypt')

route.post(
  '/register',
  async (req, res) => {
    // Check for blank fields.
    if (req.body.name === '' || req.body.surname === '' || req.body.email === '' || req.body.pasword){
      res.send('Please complete all fields')
    }

    // Save the user in db
    const addToDB = await controller.addUser(req.body)

    // handle result of save request
    addToDB === 'saved' ? res.send('success') : res.send('error: Contact your Admin')

  }
)

route.post(
  '/login',
  async(req, res) => {
    try{
      // Check for blank field inputs
      if(req.body.email === '' || req.body.password === ''){
        res.send('Please complete all fields')
      }
  
      // send request to DB for password and _id to add to JWtoken
      const {password, _id} = await controller.loginUser(req.body)
  
      // bcrypt validates password
      const passwordValidate = await bcrypt.compare(req.body.password, password)
  
      // on passwordValidate result JWT is set and sent in cookie
      if (passwordValidate){
        // JWToken in created in response and set with authValue
        return res.cookie(
          'auth',
          // JWtoken created
          // _id must be converted toString as initial request returns an unusable Object
          jwtController.newToken(_id.toString()),

          /* 
            @desc: setcookie options to httpOnly to prevent any javaScript from accessing the cookie on the clientSide
            @desc: make secure true so cookie can only be sent via HTTPS protocol
            @desc: path set to /api/tasks.  This will only send the cookie in the header when the user makes requests to tasks and no other routes.
          */
          {
            httpOnly:true,
            secure:true,
            path: '/api/tasks'
          }
        
        // send confirmation to user to handle login
        ).send(
          true
        )
      }

      // if login is not successfull but still runs though try block the attempt Must fail.
      res.send(false)
    } catch(e){
      // fail and reject login request if system or anyother failure
      res.send(false)
    }
  }
)

route.get(
  '/logout',
  (req, res) => {
    // Destroy the authorisation token if user logs out.
    res.clearCookie('auth').send('confirmed')
  }
)

module.exports = route