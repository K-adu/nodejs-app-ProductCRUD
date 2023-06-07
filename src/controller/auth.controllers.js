const signUpValidator = require('../handler/joi')
const {createNewUser,checkExistingUser} = require('../repository/user.repository')




const signup = async (req,res)=>{

    console.log(req.body)
    const userData = signUpValidator(req,res)
    if(userData){
        createNewUser(req,res)
    }

}

const login = async(req,res)=>{
    console.log(req.body)
    await checkExistingUser(req,res)
    // res.render('homepage')
}

module.exports = {
    signup,
    login,
}