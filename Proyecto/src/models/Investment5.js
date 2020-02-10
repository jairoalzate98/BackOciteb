import { Schema, model } from "mongoose";

const Investment5Schema = new Schema({
    Fecha: String,
    Centro: String,
    Facultad: String,
    Liquidacion: String,
    Valorrecaudo: Number,
    Documento: String,
    Vigenciadocumento: Number,
    Nodocumento: Number,
    Banco: String,
    Nocuenta: String,
    TABLA: String
}, {
    collection: 'investment5'
});

export default model('investement5', Investment5Schema)