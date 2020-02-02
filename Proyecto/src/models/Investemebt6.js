import { Schema } from "mongoose";

const Investment6Schema = new Schema({
    ID: Number,
    Estado: String,
    Numero: {type: Number, default: 0},
    Fecha: String,
    Valor: Number,
    Tipo: String,
    Objeto: String,
    Unidad: String,
    Identificacion: {type: Number, default: 0},
    Tercero: String,
    Centrocosto: String, 
    Anio: Number,
    FACULTAD: String,
    TABLA: String
});

export default Investment6Schema;