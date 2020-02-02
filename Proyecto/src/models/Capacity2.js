import { Schema } from "mongoose";

const Capacity2Schema = new Schema({
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
    TipoInvestigadorColciencias781_2017: String,
    TABLA: String
});

export default Capacity2Schema;