const Transaccion = require("../models/transaccion");

//esta funcion sirve para comprar y vender

exports.newTransaccion = (req, res) => {
    const newTransaccion = new Transaccion({
        idpartitura: req.body.partitura,
        idusuario: req.body.usuario,
        accion: "vender",
        precio: "300000",
        pago: "0"
    })

    newTransaccion.save((err,transaccionStored)=>{
        if(err) res.status(500).send({mensaje:`Error  ${err}`})
        res.status(200).send({transaccion:transaccionStored})
    })
}

exports.getPartituraByPrize = (req, res) => {
    Transaccion.find({ idusuario : req.params.usuario }).populate('idpartitura idusuario').exec(function(err, data){
        if(err) return res.status(500).send({mensaje:`Error al realizar la peticion ${err}`});
        if(!data) return res.status(404).send({mensaje:'No existen usuarios'});
        res.status(200).send(data);

    })
}

exports.getSellings = (req, res) => {
    Transaccion.find({ accion : "vender" }).populate('idpartitura').exec(function(err, data){
        if(err) return res.status(500).send({mensaje:`Error al realizar la peticion ${err}`});
        if(!data) return res.status(404).send({mensaje:'No existen usuarios'});
        res.status(200).send(data);

    })
}

  exports.newComentario = (req, res) => {
        Transaccion.findOneAndUpdate({ _id: req.body._id, accion: "pago " }, { $push: { "comentario": req.body.comentario },  new: true })
        .exec(function(err, data){
            if (err) throw err;
            if(!data) console.log("error");
            res.send(data)
        })
    }