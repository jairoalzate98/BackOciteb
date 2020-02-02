import { Schema } from "mongoose";

const Formation1Schema = new Schema({
    Entidad: String,
    Nombre: String,
    Grupo: String,
    CodigoCOL: String,
    SGI: Number,
    Centro: String,
    Facultad: String,
    Programa: String,
    Anio: Number,
    Correo: String,
    Tutor: String, 
    Observaciones: String,
    Celular: String,
    Categoria693_2014: String,
    Categoria737_2015: String,
    Categoria781_2017: String,
    TABLA: String
});

export default Formation1Schema;