const Relacion = require("../models/relacion")

exports.postRelacion = (req, res) => {
    const newRelacion = new Relacion({
        Partitura: req.body.partitura,
        Genero: req.body.genero
    })

    newRelacion.save((err,relacionStored)=>{
        if(err) res.status(500).send({mensaje:`Error al guardar ${err}`})
        res.status(200).send({relacion:relacionStored})
    })
}

exports.getPartituraWithGenero = (req, res) => {
    Relacion.find({ Genero: req.params.id_genero }).populate('Partitura Genero').exec(function(err, data){
        if(err) return res.status(500).send({mensaje:`Error al realizar la peticion ${err}`});
        if(!data) return res.status(404).send({mensaje:'No existen usuarios'});
        res.status(200).send(data);
    })
}