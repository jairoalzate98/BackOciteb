import { Schema, model } from "mongoose";

const Investment6Schema = new Schema({
    ID: Number,
    Estado: String,
    Numero: Number,
    Fecha: String,
    Valor: Number,
    Tipo: String,
    Objeto: String,
    Unidad: String,
    Identificacion:Number,
    Tercero: String,
    Centrocosto: String, 
    Anio: Number,
    FACULTAD: String,
    TABLA: String
}, {
    collection: 'investment6'
});

export default model('investment6', Investment6Schema)