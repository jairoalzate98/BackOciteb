import { Schema, model } from "mongoose";

const InvestmentSchema = new Schema({
    CODIGOPROYECTO: Number,
    PROYECTO: String,
    FECHAINICIO: String,
    ESTADOPROYECTO: String,
    FECHAESTADO: String,
    FECHAEJECUCION: String,
    ANIOEJECUCION: Number,
    TIPOFINANCIACION: String,
    FACULTAD: String,
    PROGRAMA: String,
    AREACONOCIMIENTO: String,
    CONVOCATORIA: String,
    CODIGOCENTRO: Number,
    CENTRO: String,
    CODIGOGRUPO: Number,
    GRUPO: String,
    AREAOCDE: String,
    SIGLA: String,
    NOMBRES: String,
    IDENTIFICACION: Number,
    TIPO: String,
    TIPOINVESTIGADOR: String,
    MONTOESPECIEINTERNO: Number,
    MONTOEFECTIVOINTERNO: Number,
    MONTOEXTERNO1: Number,
    ENTIDADEXTERNA1: String,
    TIPODEENTIDAD: String,
    MONTOEXTERNO2: String,
    ENTIDADEXTERNA2: String,
    NOTAS: String,
    COMPROMISO: String,
    TABLA: String
}, {
    collection: 'investment'
});

export default model('investement', InvestmentSchema)