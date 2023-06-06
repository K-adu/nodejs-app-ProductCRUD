const express = require('express')
const {signup,login} = require('../controller/auth.controllers')

const router = express.Router()



// //render signup
// router.get('/auth/signup', renderSignup)


//post signup method
router.post('/auth/signup', signup)



// //render login
// router.get('/auth/signup', renderLogin)


// post signup method
router.post('/auth/login', login)



//logout 
// router.post('/auth/logout', logout)




module.exports = router