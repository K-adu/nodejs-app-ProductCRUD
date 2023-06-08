const signUpValidator = require('../handler/joi')
const {createNewUser,checkExistingUser} = require('../repository/user.repository')



const signup = async (req,res)=>{

    console.log(req.body)
    const userData = signUpValidator(req,res)
    if(userData){
       const token =  await createNewUser(req,res)
       res.render('homepage', {token: token})
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