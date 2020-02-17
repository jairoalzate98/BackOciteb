import { Schema, model } from "mongoose";

const Formation3Schema = new Schema({
    ANIO: Number,
    NoEstsemilleros: Number,
    FACULTAD: String,
    TABLA: String
});

export default model('formation3', Formation3Schema)