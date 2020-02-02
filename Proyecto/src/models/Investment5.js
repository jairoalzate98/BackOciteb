import { Schema } from "mongoose";

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
});

export default Investment5Schema;