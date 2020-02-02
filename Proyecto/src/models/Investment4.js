import { Schema } from "mongoose";

const investment4Schema = new Schema({
    Facultad: String,
    Grupo: String,
    Noproductos: Number,
    Publindex: {type: String, default: ""},
    SJRoJCR: {type: String, default: ""},
    Nombredeproducto: {type: String, default: ""},
    Fuente: {type: String, default: ""},
    NoSalarios: {type: Number, default: 0},
    Valor: {type: Number, default: 0},
    GrupLAC: {type: String, default: ""},
    Observaciones: {type: String, default: ""},
    Distribucion: {type: String, default: ""},
    SMMLV: {type: String, default: ""},
    Nodeproductosporfacultad: {type: Number, default: 0},
    Noproductosporgrupo:{type: Number, default: 0},
    Tipodeproducto: String,
    TABLA: String
});

export default investment4Schema;