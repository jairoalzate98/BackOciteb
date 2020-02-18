import { Schema, model } from "mongoose";

const Formation2Schema = new Schema({
    Convocatoria: String,
    ANIOEJECUCION: Number,
    Entidadpostulante: String,
    Departamento: String,
    ProgramaCTIGrupo: String,
    Centro: String,
    NombreGrupo: String,
    SGI: Number,
    CodColciencias: String,
    Facultad: String,
    Programa: String, 
    AreaOCDE: String,
    TipodeDocumentoIdentificaciondeljoven: String,
    DocumentoIdentificaciondeljoven: Number,
    Nombredeljoven: String,
    correo: String,
    TABLA: String
}, {
    collection: 'formation2'
});

export default model('formation2', Formation2Schema)