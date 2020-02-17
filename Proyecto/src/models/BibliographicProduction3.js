import { Schema, model } from "mongoose";

const BP3Schema = new Schema({
    ID: Number,
    NOMBRELIBRO: String,
    AUTORES: String,
    RESENIA: String,
    ISBN: String,
    FACULTAD: String,
    FACULTAD2: String,
    COLECCION: String,
    ANIOPUBLICACION: Number, 
    TABLA: String
}, {
    collection: 'BP3'
});

export default model('BP3', BP3Schema)