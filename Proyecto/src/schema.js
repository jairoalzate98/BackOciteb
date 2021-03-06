import { resolvers } from  './resolvers'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDef = gql`

    type Query {
        investmentList(faculty: String, table: String): [Investment]
        Investment4List(faculty: String): [Investment4]
        Investment5List(faculty: String): [Investment5]
        Investment6List(faculty: String): [Investment6]
        Formation1List(faculty: String): [Formation1]
        Formation2List(faculty: String): [Formation2]
        Formation3List(faculty: String): [Formation3]
        Capacity1List(faculty: String): [Capacity1]
        Capacity2List(faculty: String): [Capacity2]
        Capacity2_1List(faculty: String): [Capacity2_1]
        BibliographicProduction3(faculty: String): [BibliographicProduction3]
        SchoolList: [School]
    }

    type School {
        tipo: String
        total: Int
    }

    type Investment {
        tipo: String
        anio: Int
        total: Int
        AporteEspecie: Float
        AporteEfectivo: Float
        AporteExterno: Float
        totalDinero: Float
        tipoEntidad: String
        totalEntidadExterna: Float
    }

    type Investment4 {
        Grupo: String
        productos: Int
        total: Float
    }

    type Investment5 {
        Anio: Int
        total: Float
    }

    type Investment6 {
        Anio: Int
        total: Float
    }
    
    type Formation1 {
        Programa: String
        Anio: Int
        total: Int
    }

    type Formation2 {
        Programa: String
        Anio: Int
        total: Int
    }

    type Formation3 {
        Anio: Int
        NoEstSemilleros: Int
    }

    type Capacity1 {
        Anio: Int
        A1: Int
        A: Int
        B: Int
        C: Int
        D: Int
        R: Int
    }

    type Capacity2 {
        Tipo: String
        Anio: Int
        total: Int
    }

    type Capacity2_1 {
        Tipo: String
        Anio: Int
        total: Int
    }
    
    type  BibliographicProduction3 {
        Anio: Int
        total: Int
    }  

    type Mutation {
        createInvestment(investmentInfo: [InvestmentInput]): [Investment]
        createInvestment4(investment4Info: [Investment4Input]): [Investment4]
        createInvestment5(investment5Info: [Investment5Input]): [Investment5]
        createInvestment6(investment6Info: [Investment6Input]): [Investment6]
        createFormation1(formation1Info: [Formation1Input]): [Formation1]
        createFormation2(formation2Info: [Formation2Input]): [Formation2]
        createFormation3(formation3Info: [Formation3Input]): [Formation3]
        createCapacity1(capacity1Info: [Capacity1Input]): [Capacity1]
        createCapacity2(capacity2Info: [Capacity2Input]): [Capacity2]
        createCapacity2_1(capacity2_1Info: [Capacity2_1Input]): [Capacity2_1]
        createBP3(BibliographicProduction3Info: [BibliographicProduction3Input]): [BibliographicProduction3]
    }

    input Capacity1Input {
        Anio: Int
        A1: Int
        A: Int
        B: Int
        C: Int
        D: Int
        R: Int
        Facultad: String
    }
    
    input  BibliographicProduction3Input {   
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

    input Capacity2_1Input {
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

    input Capacity2Input {
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

    input Formation3Input {
        Anio: Int
        NoEstSemilleros: Int
        FACULTAD: String
    }

    input Formation2Input {
        Convocatoria: String
        ANIOEJECUCION: Int
        Entidadpostulante: String
        Departamento: String
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