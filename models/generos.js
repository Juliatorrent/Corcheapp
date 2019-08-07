const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const genero=new Schema({
  nombre:{type:String}
},{versionKey:false});
module.exports=mongoose.model('genero',genero);
