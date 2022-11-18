const {Schema, model} = require('mongoose')
const EncuestaSchema = Schema({
    nombreEncuesta : {
        type : String
    },
    fecha : {
        type : String
    },
    documentoEncuestado : {
        type : Number
    },
    nombreEncuestado : {
        type : String
    },
    edad : {
        type : Number
    },
    genero : {
        type : String
    },
    empleado : {
        type : String
    }
})
module.exports = model("Encuesta", EncuestaSchema)