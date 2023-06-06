const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true},
    password: { type: String, required: true, trim: true},
    tokens: [{
      token:{
        type: String,
        required: true
    }}]
},{
    timestamp: true,


})

//genetation of jwt tokes
UserSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, 'nothincomparestoyou')

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}


//using bcrypt to hash the passowrd

UserSchema.methods.encryptPassword = async (password) => {
    return await bcrypt.hash(password, 8);
  };
  
UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
const User =  mongoose.model("User", UserSchema);
module.exports = User