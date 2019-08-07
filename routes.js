var express = require('express')
var router = express.Router()


const Transaccion=require('./models/transaccion');
const Genero=require('./models/generos');

const axios = require("axios")

//Controllers
const UserController = require("./controller/userController")
const PartituraController = require("./controller/partituraController")
const RelacionController = require("./controller/relacionController")
const TransaccionController = require("./controller/transaccionController")

router.get('/', (req, res) => {
    res.render('index', { title: 'corcheapp', message: 'BIENVENIDOS A CORCHEAPP' })
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/comentarios', (req, res) => {

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(comments => {

        res.render('comments', { comments: comments.data })
    })
    .catch(err => {
        console.error(err)
    })
})

//usuarios
router.get('/usuarios', UserController.getUsers);
router.get('/usuarios/:_id', UserController.getUser);
router.post('/usuarios', UserController.postUser);
router.post('/update_usuario/:_id', UserController.updateUser);
router.post('/delete_user/:_id', UserController.deleteUser)


//relacion
router.post('/relacion', RelacionController.postRelacion);
router.get('/relacion/:id_genero', RelacionController.getPartituraWithGenero);


//partitura
router.get('/partituras', PartituraController.getPartituras);
router.get('/files', PartituraController.getFiles);
router.get('/partitura/:_id', PartituraController.getPartituraById);
router.post('/partituras', PartituraController.postPartituras);
router.get('/partituras/:usuario/:prize', TransaccionController.getPartituraByPrize);

//transaccion
router.post('/transaccion', TransaccionController.newTransaccion)
router.post('/transaccion/comentario', TransaccionController.newComentario)

router.get('/sellings', TransaccionController.getSellings)



router.get('/transacciones',(req,res)=>{
    Transaccion.find({},(err,transacciones)=>{
        if(err) return res.status(500).send({mensaje:`Error al realizar la peticion ${err}`});
        if(!transacciones) return res.status(404).send({mensaje:'No existen transacciones'});
        res.status(200).send({transacciones});
    })
})

//genero
router.get('/generos',(req,res)=>{
    Genero.find({},(err,generos)=>{
        if(err) return res.status(500).send({mensaje:`Error al realizar la peticion ${err}`});
        if(!generos) return res.status(404).send({mensaje:'No existen generos'});
        res.status(200).send({generos});
    })
})


router.post('/generos',(req,res)=>{
    let gen=new Genero()
    gen.nombre=req.body.nombre
    gen.save((err,genStored)=>{
        if(err) res.status(500).send({mensaje:`Error al salvar el genero ${err}`})
        res.status(200).send({gen:genStored})
    })
})

module.exports = router;