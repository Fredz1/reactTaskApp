const jwt = require('jsonwebtoken')
require('dotenv').config()

/* 
  Note: Cookies are sent with every  request to the server.
  They will also only be sent via HTTPS
*/

/* 
  desc: request is ended if no cookie is available in the header or cookie validation fails
*/
const checkLoginStatus = (req, res, next) => {
  try{
    // check for header
    if (!req.headers.cookie) return res.send(['redirect to home'])

    // Token is  split and array returned
    const token = req.headers.cookie.split('=')
    
    // If verify fails an error is thrown and handled in the catch block
    // If validation succeeds the id is destructure out.
    const { id } = jwt.verify(token[1], process.env.JWT_SECRET)

    // sent req.body.id for ease of use further in the process
    req.body.id = id
    
    
    next()
  }catch(e){
    // if cookie vaerification fails 
    res.send(['cannot verify you'])
  }
  
  
}

// export in object in event inorder to handel more functionality in the future
module.exports = {checkLoginStatus}