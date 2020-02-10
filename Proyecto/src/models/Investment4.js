import { Schema, model } from "mongoose";

const investment4Schema = new Schema({
    Facultad: String,
    Grupo: String,
    Noproductos: Number,
    Publindex: String,
    SJRoJCR: String,
    Nombredeproducto: String,
    Fuente: String,
    NoSalarios: String,
    Valor: Number,
    GrupLAC: String,
    Observaciones: String,
    Distribucion: String,
    SMMLV: String,
    Nodeproductosporfacultad: Number,
    Noproductosporgrupo:Number,
    Tipodeproducto: String,
    TABLA: String
}, {
    collection: 'investment4'
});

export default model('investement4', investment4Schema)