//User controller
const User=require('../models/usuarios');

exports.getUsers = (req, res) => {
    User.find().exec(function(err, usuarios){
        if(err) return res.status(500).send({mensaje:`Error al realizar la peticion ${err}`});
        if(!usuarios) return res.status(404).send({mensaje:'No existen usuarios'});
        console.log(usuarios);
        res.render('users', { users: usuarios } );
    })
}

exports.getUser = (req, res) => {
    console.log(req.params._id)
    User.findById(req.params._id).exec(function(err, usuario){
        if(err) return res.status(500).send({mensaje:`Error al realizar la peticion ${err}`});
        if(!usuario) return res.status(404).send({mensaje:'No existen usuarios'});
        console.log(usuario)
        res.send(usuario);
    })
}

exports.postUser = (req, res) => {
    let { nickname, password, picture } = req.body;

    let user = {
        nickname: nickname,
        password: password,
        picture: picture
    }
    const newUser = new User(user)
    newUser.save((err,userStored)=>{
        if(err) res.status(500).send({mensaje:`Error al salvar el usuario ${err}`})
        res.status(200).send({user:userStored})
    })
}

exports.updateUser = (req, res) => {
    const updateuser = {
        password: req.body.password
    }
    User.findByIdAndUpdate({_id: req.params._id } , updateuser, { new: true, upsert: true }).exec(function(err, user){
        if (err) throw err;
        res.send(user)
    })
}

exports.deleteUser = (req, res) => {
    User.findOneAndDelete({ _id: req.params._id }).exec(function(err){
        if (err) throw err;
        res.send("usuario eliminado")
    })
}