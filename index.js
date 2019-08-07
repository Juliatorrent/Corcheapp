const express=require('express');
const path = require("path")
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();

const port=process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const db = require('./config/conexion')

app.set('json spaces', 2);

app.set('view engine', 'pug');


const routes = require("./routes");

app.use('/', routes);

    app.listen(port,()=>{
        console.log(`Api rest corriendo en http://localhost:${port}`)
    })