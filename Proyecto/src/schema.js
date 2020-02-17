import { resolvers } from  './resolvers'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDef = gql`

    type Query {
        InvestmentList: [Investment]
        Investment4List: [Investment4]
        Investment5List: [Investment5]
        Investment6List: [Investment6]
        Formation1List: [Formation1]
        Formation2List: [Formation2]
        Formation3List: [Formation3]
        Capacity1List: [Capacity1]
        Capacity2List: [Capacity2]
        Capacity2_1List: [Capacity2_1]
        BibliographicProduction3: [BibliographicProduction3]
    }

    type Investment {
        CODIGOPROYECTO: Int
        PROYECTO: String
        FECHAINICIO: String
        ESTADOPROYECTO: String
        FECHAESTADO: String
        FECHAEJECUCION: String
        ANIOEJECUCION: Int
        TIPOFINANCIACION: String
        FACULTAD: String
        PROGRAMA: String
        AREACONOCIMIENTO: String
        CONVOCATORIA: String
        CODIGOCENTRO: Int
        CENTRO: String
        CODIGOGRUPO: Int
        GRUPO: String
        AREAOCDE: String
        SIGLA: String
        NOMBRES: String
        IDENTIFICACION: Int
        TIPO: String
        TIPOINVESTIGADOR: String
        MONTOESPECIEINTERNO: Int
        MONTOEFECTIVOINTERNO: Int
        MONTOEXTERNO1: Int
        ENTIDADEXTERNA1: String
        TIPODEENTIDAD: String
        MONTOEXTERNO2: Int
        ENTIDADEXTERNA2: String
        NOTAS: String
        COMPROMISO: String
        TABLA: String
    }

    type Investment4 {
        Facultad: String
        Grupo: String
        Noproductos: Int
        Publindex: String
        SJRoJCR: String
        Nombredeproducto: String
        Fuente: String
        NoSalarios: String
        Valor: Int
        GrupLAC: String
        Observaciones: String
        Distribucion: String
        SMMLV: String
        Nodeproductosporfacultad: Int
        Noproductosporgrupo: Int
        Tipodeproducto: String
        TABLA: String
    }

    type Investment5 {
        Fecha: String
        Centro: String
        Facultad: String
        Liquidacion: String
        Valorrecaudo: Int
        Documento: String
        Vigenciadocumento: Int
        Nodocumento: Int
        Banco: String
        Nocuenta: String
        TABLA: String
    }

    type Investment6 {
        ID: Int
        Estado: String
        Numero: Int
        Fecha: String
        Valor: Float
        Tipo: String
        Objeto: String
        Unidad: String
        Identificacion: Float
        Tercero: String
        CentroCosto: String
        Anio: Int
        FACULTAD: String
        TABLA: String
    }
    
    type Formation1 {
        Entidad: String
        Nombre: String
        Grupo: String
        CodigoCOL: String
        SGI: Int
        Centro: String
        Facultad: String
        Programa: String
        Anio: Int
        Correo: String
        Tutor: String 
        Observaciones: String
        Celular: String
        Categoria693_2014: String
        Categoria737_2015: String
        Categoria781_2017: String
        TABLA: String
    }

    type Formation2 {
        Convocatoria: String
        ANIOEJECUCION: Int
        Entidadpostulante: String
        DepartamentoEntidadpostulante: String
        ProgramaCTIGrupo: String
        Centro: String
        NombreGrupo: String
        SGI: Int
        CodColciencias: String
        Facultad: String
        Programa: String 
        AreaOCDE: String
        TipodeDocumentoIdentificaciondeljoven: String
        DocumentoIdentificaciondeljoven: Int
        Nombredeljoven: String
        correo: String
        TABLA: String
    }

    type Formation3 {
        ANIO: Int
        NoEstsemilleros: Int
        FACULTAD: String
        TABLA: String
    }

    type Capacity1 {
        ANIO: Int
        A1: String
        A: String
        B: String
        C: String
        D: String
        R: String
        FACULTAD: String
        TABLA: String
    }

    type Capacity2 {
        Identificacion: Int
        Nombres: String
        Facultad: String
        ProgramaAcademico: String
        Vinculacion: String
        Vinculacion2: String
        NivelEstudios: String
        Anio: Int
        PeriodoAcademico: Int
        Genero: String
        Edad: Int
        TipoInvestigadorColciencias781_2017: String
        TABLA: String
    }

    type Capacity2_1 {
        Identificacion: Int
        Nombres: String
        Facultad: String
        ProgramaAcademico: String
        Vinculacion: String
        Vinculacion2: String
        NivelEstudios: String
        Anio: Int
        PeriodoAcademico: Int
        Genero: String
        Edad: Int
        TipoInvestigadorColciencias781_017: String
        Columna1: String
        TABLA: String
    }
    
    type  BibliographicProduction3 {   
        ID: Int
        NOMBRELIBRO: String
        AUTORES: String
        RESENIA: String
        ISBN: String
        FACULTAD: String
        FACULTAD2: String
        COLECCION: String
        ANIOPUBLICACION: Int
        TABLA: String
    }  

    type Mutation {
        createInvestment(investmentInfo: [InvestmentInput]): [Investment]
        createInvestment4(investment4Info: [Investment4Input]): [Investment4]
        createInvestment5(investment5Info: [Investment5Input]): [Investment5]
        createInvestment6(investment6Info: [Investment6Input]): [Investment6]
        createFormation1(formation1Info: [Formation1Input]): [Formation1]
        createFormation2(formation2Info: [Formation2Input]): [Formation2]
        createFormation3(formation3Info: [Formation3Input]): [Formation3]
    }

    input Formation3Input {
        ANIO: Int
        NoEstsemilleros: Int
        FACULTAD: String
        TABLA: String
    }

    input Formation2Input {
        Convocatoria: String
        ANIOEJECUCION: Int
        Entidadpostulante: String
        DepartamentoEntidadpostulante: String
        ProgramaCTIGrupo: String
        Centro: String
        NombreGrupo: String
        SGI: Int
        CodColciencias: String
        Facultad: String
        Programa: String 
        AreaOCDE: String
        TipodeDocumentoIdentificaciondeljoven: String
        DocumentoIdentificaciondeljoven: Int
        Nombredeljoven: String
        correo: String
        TABLA: String
    }

    input Formation1Input {
        Entidad: String
        Nombre: String
        Grupo: String
        CodigoCOL: String
        SGI: Int
        Centro: String
        Facultad: String
        Programa: String
        Anio: Int
        Correo: String
        Tutor: String 
        Observaciones: String
        Celular: String
        Categoria693_2014: String
        Categoria737_2015: String
        Categoria781_2017: String
        TABLA: String
    }

    input Investment5Input {
        Fecha: String
        Centro: String
        Facultad: String
        Liquidacion: String
        Valorrecaudo: Int
        Documento: String
        Vigenciadocumento: Int
        Nodocumento: Int
        Banco: String
        Nocuenta: String
        TABLA: String
    }

    input Investment6Input {
        ID: Int
        Estado: String
        Numero: Int
        Fecha: String
        Valor: Float
        Tipo: String
        Objeto: String
        Unidad: String
        Identificacion: Float
        Tercero: String
        CentroCosto: String
        Anio: Int
        FACULTAD: String
        TABLA: String
    }

    input Investment4Input {
        Facultad: String
        Grupo: String
        Noproductos: Int
        Publindex: String
        SJRoJCR: String
        Nombredeproducto: String
        Fuente: String
        NoSalarios: String
        Valor: Int
        GrupLAC: String
        Observaciones: String
        Distribucion: String
        SMMLV: String
        Nodeproductosporfacultad: Int
        Noproductosporgrupo: Int
        Tipodeproducto: String
        TABLA: String
    }

    input InvestmentInput {
        CODIGOPROYECTO: Int
        PROYECTO: String
        FECHAINICIO: String
        ESTADOPROYECTO: String
        FECHAESTADO: String
        FECHAEJECUCION: String
        ANIOEJECUCION: Int
        TIPOFINANCIACION: String
        FACULTAD: String
        PROGRAMA: String
        AREACONOCIMIENTO: String
        CONVOCATORIA: String
        CODIGOCENTRO: Int
        CENTRO: String
        CODIGOGRUPO: Int
        GRUPO: String
        AREAOCDE: String
        SIGLA: String
        NOMBRES: String
        IDENTIFICACION: Int
        TIPO: String
        TIPOINVESTIGADOR: String
        MONTOESPECIEINTERNO: Int
        MONTOEFECTIVOINTERNO: Int
        MONTOEXTERNO1: Int
        ENTIDADEXTERNA1: String
        TIPODEENTIDAD: String
        MONTOEXTERNO2: Int
        ENTIDADEXTERNA2: String
        NOTAS: String
        COMPROMISO: String
        TABLA: String
    }
`

const schema = new ApolloServer({
    typeDefs: typeDef,
    resolvers: resolvers,
    introspection: true,
    playground: {
        endpoint: '/graphql',
        settings: {
            "editor.theme": "dark"
        }
    }
})

export default schema