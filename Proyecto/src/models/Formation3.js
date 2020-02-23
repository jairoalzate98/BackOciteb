import { Schema, model } from "mongoose";

const Formation3Schema = new Schema({
    Anio: Number,
    NoEstSemilleros: Number,
    FACULTAD: String
}, {
    collection: 'formation3'
});

export default model('formation3', Formation3Schema)