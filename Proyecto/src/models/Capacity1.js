import { Schema, model } from "mongoose";

const Capacity1Schema = new Schema({
    ANIO: Number,
    A1: String,
    A: String,
    B: String,
    C: String,
    D: String,
    R: String,
    FACULTAD: String,
    TABLA: String
}, {
    collection: 'capacity1'
});

export default model('capacity1', Capacity1Schema)