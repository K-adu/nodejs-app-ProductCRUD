const signUpValidator = require('../handler/joi')
const {createNewUser,checkExistingUser} = require('../repository/user.repository')



const signup = async (req,res)=>{

    console.log(req.body)
    const userData = signUpValidator(req,res)
    if(userData){
        try{
           const token = await createNewUser(req, res);
           res.render('homepage', { token: token});
            
      } catch (error) {

            console.error(error);
            res.status(500).send({ message: 'Error creating user' });
      }
    }
}




const login = async(req,res)=>{
    console.log(req.body)
    const token = await checkExistingUser(req,res)
    res.render('homepage', {token: token})
}


module.exports = {
    signup,
    login,
}