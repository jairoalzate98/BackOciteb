import { Schema } from "mongoose";

const Formation3Schema = new Schema({
    ANIO: Number,
    NoEstsemilleros: Number,
    FACULTAD: String,
    TABLA: String
});

export default Formation3Schema;