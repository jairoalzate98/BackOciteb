import { Schema, model } from "mongoose";

const Capacity2_1Schema = new Schema({
    Identificacion: Number,
    Nombres: String,
    Facultad: String,
    ProgramaAcademico: String,
    Vinculacion: String,
    Vinculacion2: String,
    NivelEstudios: String,
    Anio: Number,
    PeriodoAcademico: Number,
    Genero: String,
    Edad: Number,
    TipoInvestigadorColciencias781_017: String,
    Columna1: String,
    TABLA: String
}, {
    collection: 'capacity2_1'
});

export default model('capacity2_1', Capacity2_1Schema)