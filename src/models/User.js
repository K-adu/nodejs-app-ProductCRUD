const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const UserSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true},
    password: { type: String, required: true, trim: true}
},{
    timestamp: true,
    versionKey: false


})


UserSchema.methods.encryptPassword = async (password) => {
    return await bcrypt.hash(password, 8);
  };
  
UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
const User =  mongoose.model("User", UserSchema);
module.exports = User