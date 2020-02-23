import { Schema, model } from "mongoose";

const Capacity1Schema = new Schema({
    Anio: Number,
    A1: Number,
    A: Number,
    B: Number,
    C: Number,
    D: Number,
    R: Number,
    Facultad: String
}, {
    collection: 'capacity1'
});

export default model('capacity1', Capacity1Schema)