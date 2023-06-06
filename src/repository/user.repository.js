const User = require('../models/User')


const createNewUser = async (req,res)=>{
   const  {name,email,password} =  req.body
    const userFound = await User.findOne({ email: email });
    if (userFound) {
      return res.send("user already exist");
    }
  
    // Saving a New User
    const newUser = new User({ name, email, password });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    // req.flash("success_msg", "You are registered.");
    res.send("suignin successgul");
  };


  const checkExistingUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userFound = await User.findOne({ email: email });
  
      if (userFound) {
        const isMatch = await userFound.matchPassword(password);
        if (isMatch) {
          res.send('Successfully logged in');
        } else {
          res.send('Invalid login details');
        }
      } else {
        res.send('User not found');
      }
    } catch (e) {
      res.send('Error occurred during login');
    }
  };
  


module.exports ={
     createNewUser,
     checkExistingUser,
}