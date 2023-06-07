const User = require('../models/User')


const createNewUser = async (req,res)=>{
   const  {name,email,password} =  req.body
    const userFound = await User.findOne({ email: email });
    if (userFound) {
      return res.send({message: 'Email already Exist'});
    }
  
    // Saving a New User
    const newUser = new User({ name, email, password });
    newUser.password = await newUser.encryptPassword(password);
    
    await newUser.save();
    token = await newUser.generateAuthToken()
    // req.flash("success_msg", "You are registered.");
    res.status(200).send(token);
  };


  const checkExistingUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userFound = await User.findOne({ email: email });
  
      if (userFound) {
        const isMatch = await userFound.matchPassword(password);
        if (isMatch) {
          token = await userFound.generateAuthToken()
          
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