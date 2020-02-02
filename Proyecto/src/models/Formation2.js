import { Schema } from "mongoose";

const Formation2Schema = new Schema({
    Convocatoria: String,
    ANIOEJECUCION: Number,
    Entidadpostulante: String,
    DepartamentoEntidadpostulante: String,
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
});

export default Formation2Schema;