const express = require('express')
const {signup,login} = require('../controller/auth.controllers')

const router = express.Router()





//post signup method
router.post('/auth/signup', signup)



// post signup method
router.post('/auth/signin', login)






module.exports = router