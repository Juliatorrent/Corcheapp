//partituras controller

const Partitura=require('../models/partitura');

exports.getPartituras  = (req,res)=>{
    Partitura.find({},(err,partituras)=>{
        if(err) return res.status(500).send({mensaje:`Error al realizar la peticion ${err}`});
        if(!partituras) return res.status(404).send({mensaje:'No existen partituras'});
        console.log(partituras)
        res.render('partitura', { partituras: partituras })
    })
}

exports.getFiles = (req, res) => {
    Partitura.find({}).select('archivo -_id').exec(function(err, data){
        if (err) throw err;
        res.send(data)
    })
}

exports.getPartituraById  = (req,res)=>{
    Partitura.find({ _id: req.params._id },(err,partituras)=>{
        if(err) return res.status(500).send({mensaje:`Error al realizar la peticion ${err}`});
        if(!partituras) return res.status(404).send({mensaje:'No existen partituras'});
        res.status(200).send({partituras});
    })
}



exports.postPartituras = (req,res)=>{
    let part=new Partitura()
    part.titulo=req.body.titulo
    part.duracion=req.body.duracion
    part.archivo=req.body.archivo
    part.precio=req.body.precio
    part.tipo=req.body.tipo
    part.save((err,partStored)=>{
        if(err) res.status(500).send({mensaje:`Error al salvar la partitura ${err}`})
        res.status(200).send({part:partStored})
    })
}
