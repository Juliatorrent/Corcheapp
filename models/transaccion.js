const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const transacciones=new Schema({
  idtransacciones:{type:String},
  idusuario:{
      type: mongoose.SchemaTypes.ObjectId,
      ref:"user"
  },
  idpartitura:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:"partitura"
  },
  accion:{type:String},
  precio: { type: String},
  pago:{type:String},
  comentario:[{type: String}]
},{versionKey:false});
module.exports=mongoose.model('transaccion',transacciones);
