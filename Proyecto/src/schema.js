import { resolvers } from  './resolvers'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDef = gql`

    type Query {
        InvestmentList: [Investment]
        Investment4List: [Investment4]
        Investment5List: [Investment5]
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
        NoSalarios: Int
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
        Valor: Int
        Tipo: String
        Objeto: String
        Unidad: String
        Identificacion: Int
        Tercero: String
        Centrocosto: String
        Anio: Int
        FACULTAD: String
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
            "editor.theme": "light"
        }
    }
})

export default schema