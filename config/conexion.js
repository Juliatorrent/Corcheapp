const express=require('express');
const mongoose=require('mongoose');
const port=process.env.PORT || 9000;
mongoose.connect('mongodb+srv://Jtorrente:Jtorrente16@cluster0-gsas0.mongodb.net/prueba?retryWrites=true&w=majority',{useNewUrlParser:true},(err,res)=>{
  if (err) {
    return console.log(`Error al conectar a la DB ${err}`)
  }
  else{
    console.log('Conexión a la DB establecida')
  }
});
module.exports=mongoose;
