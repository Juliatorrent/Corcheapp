const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RelacionSchema = new Schema({
    Partitura: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "partitura"
    },
    Genero: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "genero"
    }
})

module.exports=mongoose.model('relacion',RelacionSchema);