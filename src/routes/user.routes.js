const express = require('express')
const {signup,login} = require('../controller/user.controllers')
const multer = require('multer')
const router = express.Router()
const isAuthenticated = require('../middleware/auth')

upload = multer({
    limits: {
        fileSize: 1000000000,

    },
    storage: multer.memoryStorage(),
    // fileFilter(req,file,cb){
    //     if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
    //         return cb(new Error('please specify a valid docs or docx file'))
    //     }
    // }
})




//post signup method
router.post('/auth/signup',upload.single('profilePic'),signup)



// post login method
router.post('/auth/login',  login)


// uploading a pic to user datbase


// router.post('/users/me/profilePic', isAuthenticated, upload.single('profilePic'), async (req, res) => {
//     const buffer = await sharp(req.file.buffer).resize({width:250, height: 250}).png().toBuffer()
//     req.user.profilePic = buffer
//     await req.user.save();
//     res.send();
// }, (error, req, res, next) => {
//     res.status(400).send({
//         error: error.message
//     });
// });




module.exports = router