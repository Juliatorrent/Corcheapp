const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const partituras=new Schema({
  titulo:{type:String},
  duracion:{type:String},
  archivo:{type:String},
  precio:{type:Number},
  tipo:{type:String}
},{versionKey:false});
module.exports=mongoose.model('partitura',partituras);
