const User = require('../models/User')
const multer = require('multer')

const createNewUser = async (req,res)=>{
   const  {name,email,password} =  req.body
   const { buffer } = req.file;
    const userFound = await User.findOne({ email: email });
    if (userFound) {
      return res.send({message: 'Email already Exist'});
    }

    if (!password) {
      return res.status(400).send({ message: 'Password is required' });
    }
  
    // Saving a New User
    const profilePicBuffer = Buffer.from(buffer);
    const newUser = new User({ name, email, password, profilePic: profilePicBuffer  });
    newUser.password = await newUser.encryptPassword(password);
    
    await newUser.save();
    token = await newUser.generateAuthToken()
    return token
    // req.flash("success_msg", "You are registered.");
  };




  const checkExistingUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userFound = await User.findOne({ email: email });
  
      if (userFound) {
        const isMatch = await userFound.matchPassword(password);
        if (isMatch) {
          token = await userFound.generateAuthToken()
          return token
        } else {
          res.send({message: 'Invalid login details'});
        }
      } else {
        res.send({message: 'User not found'});
      }
    } catch (e) {
      res.send({message:'Error occurred during login'});
    }
  };
  


module.exports ={
     createNewUser,
     checkExistingUser,
}