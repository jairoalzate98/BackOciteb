import { Schema } from "mongoose";

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
});

export default BP3Schema;