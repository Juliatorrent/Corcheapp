const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const usuarios=new Schema({
  nickname: String,
  password: String,
  picture: String
},{versionKey:false});
module.exports=mongoose.model('user',usuarios);
