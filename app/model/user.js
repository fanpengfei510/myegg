'use strict';
module.exports = app =>{
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    username : {
      type : String,
      required : true
    },
    password : {
      type : String,
      required : true
    },
    isAdmin : {
      type : Boolean,
      default : false
    }
  })

  return mongoose.model('User',UserSchema,'user')
}