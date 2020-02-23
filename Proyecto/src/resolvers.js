import Investement from './models/Investement';
import Investement4 from './models/Investment4';
import Investement5 from './models/Investment5';
import Investement6 from './models/Investement6';
import Formation1 from './models/Formation1';
import Formation2 from './models/Formation2';
import Formation3 from './models/Formation3';
import Capacity1 from './models/Capacity1';
import Capacity2 from './models/Capacity2';
import Capacity2_1 from './models/Capacity2_1';
import BP3 from './models/BibliographicProduction3';

export const resolvers = {

    Query: { 
        async investmentList(_, {faculty, table}){
            var fac = getFacultiesInvestment(faculty);
            if(table == 'I01'){
                return await  Investement.aggregate([
                    {$match: {  
                        FACULTAD: fac
                    }}, 
                    {$match: {
                        TABLA: table
                    }},
                    {$group: { _id: {
                        TIPOFINANCIACION: "$TIPOFINANCIACION",
                        ANIOEJECUCION: "$ANIOEJECUCION"
                    }, total: { 
                        $sum: 1 
                    }}},
                    {$project: { 
                        tipo : '$_id.TIPOFINANCIACION', 
                        anio: '$_id.ANIOEJECUCION',
                        total: '$total'}
                    }
                ])
            }else if(table == 'I02'){
                return await  Investement.aggregate([
                    {$match: {  
                        FACULTAD: fac
                    }}, 
                    {$match: {
                        TABLA: table
                    }},
                    {$group: { _id: {
                        ANIOEJECUCION: "$ANIOEJECUCION"
                    }, AporteEspecie: { 
                        $sum: '$MONTOESPECIEINTERNO'
                    }, AporteEfectivo: {
                        $sum: '$MONTOEFECTIVOINTERNO'
                    }, AporteExterno: {
                        $sum: '$MONTOEXTERNO1'
                    }}},
                    
                    {$project: { 
                        anio: '$_id.ANIOEJECUCION',
                        AporteEspecie: '$AporteEspecie',
                        AporteEfectivo: '$AporteEfectivo',
                        AporteExterno: '$AporteExterno',
                        totalDinero: {
                            $add: ['$AporteEspecie', '$AporteEfectivo', '$AporteExterno']
                        }}
                    }
                ])

            }else if(table == 'I03'){
                console.log(fac, table);
                return await  Investement.aggregate([
                    {$match: {  
                        FACULTAD: fac
                    }}, 
                    {$match: {
                        TABLA: table
                    }},
                    {$group: { _id: {
                        ANIOEJECUCION: "$ANIOEJECUCION",
                        TIPOENTIDAD: "$TIPODEENTIDAD"
                    }, totalExterno: { 
                        $sum: "$MONTOEXTERNO1" 
                    }}},
                    {$project: { 
                        tipoEntidad : '$_id.TIPOENTIDAD', 
                        anio: '$_id.ANIOEJECUCION',
                        totalEntidadExterna: '$totalExterno'}
                    }
                ])
            }
        },
        async Investment4List(_, {faculty}){
            var fac = getFacultiesInvestment4(faculty);
            return await Investement4.aggregate([
                {$match: { 
                    Facultad: fac
                }
                },
                {$group: { _id: {
                    Grupo: "$Grupo"
                }, total: { 
                    $sum: '$Valor' 
                }, productos: {
                    $sum: '$Noproductos'
                }
                }},
                {$project: { 
                    Grupo: '$_id.Grupo',
                    productos: '$productos',
                    total: '$total'}
                }
            ])
        },
        async Investment5List(_, {faculty}){
            var fac = getFacultiesInvestment5(faculty);
            return await Investement5.aggregate([
                {$match: { 
                    Facultad: fac
                }
                },
                {$group: { _id: {
                    Anio: "$Vigenciadocumento"
                }, total: { 
                    $sum: '$Valorrecaudo' 
                }
                }},
                {$project: { 
                    Anio: '$_id.Anio',
                    total: '$total'}
                }
            ])
        },
        async Investment6List(_, {faculty}){
            var fac = getFacultiesInvestment6(faculty);
            return await Investement6.aggregate([
                {$match: { 
                    FACULTAD: fac
                }
                },
                {$group: { _id: {
                    Anio: "$Anio"
                }, total: { 
                    $sum: '$Valor' 
                }
                }},
                {$project: { 
                    Anio: '$_id.Anio',
                    total: '$total'}
                }
            ])
        },
        async Formation3List(_, {faculty}){
            var fac = getFacultiesInvestment(faculty);
            return await Formation3.aggregate([
                {$match: {
                    FACULTAD: fac
                }
                },
                {$project: {
                    Anio: '$Anio',
                    NoEstSemilleros: '$NoEstSemilleros'
                }}
            ])
        },
        async Formation2List(_, {faculty}){
            var fac = getFacultiesFormation1(faculty);
            return await Formation2.aggregate([
                {$match: {
                    Facultad: fac
                }
                },
                {$group: { _id: {
                    Anio: "$ANIOEJECUCION",
                    Programa: "$Programa"
                }, total: {
                    $sum: 1
                }
                }},
                {$project: {
                    Anio: '$_id.Anio',
                    Programa: '$_id.Programa',
                    total:  '$total'
                }}
            ])
        },
        async Formation1List(_, {faculty}){
            var fac = getFacultiesFormation1(faculty);
            return await Formation1.aggregate([
                {$match: {
                    Facultad: fac
                }
                },
                {$group: { _id: {
                    Anio: "$Anio",
                    Programa: "$Programa"
                }, total: {
                    $sum: 1
                }
                }},
                {$project: {
                    Anio: '$_id.Anio',
                    Programa: '$_id.Programa',
                    total:  '$total'
                }}
            ])
        },
        async Capacity1List(_, {faculty}){
            var fac = getFacultiesInvestment(faculty);
            return await Capacity1.aggregate([
                {$match: {
                    Facultad: fac
                }
                },
                {$project: {
                    Anio: '$Anio',
                    A1: '$A1',
                    A: '$A',
                    B: '$B',
                    C: '$C',
                    D: '$D',
                    R: '$R'
                }}
            ])
        },
        async Capacity2List(_, {faculty}){
            var fac = getFacultiesFormation1(faculty);
            return await Capacity2.aggregate([
                {$match: {
                    Facultad: fac
                }
                },
                {$group: { _id: {
                    Anio: "$Anio",
                    Tipo: "$TipoInvestigadorColciencias781_2017"
                }, total: {
                    $sum: 1
                }
                }},
                {$project: {
                    Anio: '$_id.Anio',
                    Tipo: '$_id.Tipo',
                    total:  '$total'
                }}
            ])
        },
        async Capacity2_1List(_, {faculty}){
            var fac = getFacultiesFormation1(faculty);
            return await Capacity2_1.aggregate([
                {$match: {
                    Facultad: fac
                }
                },
                {$group: { _id: {
                    Anio: "$Anio",
                    Tipo: "$TipoInvestigadorColciencias781_017"
                }, total: {
                    $sum: 1
                }
                }},
                {$project: {
                    Anio: '$_id.Anio',
                    Tipo: '$_id.Tipo',
                    total:  '$total'
                }}
            ])
        },
        async BibliographicProduction3(_, {faculty}){
            var fac = getFacultiesBP3(faculty);
            return await BP3.aggregate([
                {$match: {
                    FACULTAD2: fac
                }
                },
                {$group: { _id: {
                    Anio: "$ANIOPUBLICACION"
                }, total: {
                    $sum: 1
                }
                }},
                {$project: {
                    Anio: '$_id.Anio',
                    total:  '$total'
                }}
            ])
        }
    },
    Mutation: {
        async createInvestment(_, { investmentInfo }) {
            var obj = JSON.stringify(investmentInfo);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new Investement(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        },
        async createInvestment4(_, { investment4Info }) {
            var obj = JSON.stringify(investment4Info);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new Investement4(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        },
        async createInvestment5(_, { investment5Info }) {
            var obj = JSON.stringify(investment5Info);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new Investement5(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        },
        async createInvestment6(_, { investment6Info }) {
            var obj = JSON.stringify(investment6Info);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new Investement6(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        },
        async createFormation1(_, { formation1Info }) {
            var obj = JSON.stringify(formation1Info);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new Formation1(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        },
        async createFormation2(_, { formation2Info }) {
            var obj = JSON.stringify(formation2Info);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new Formation2(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        },
        async createFormation3(_, { formation3Info }) {
            var obj = JSON.stringify(formation3Info);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new Formation3(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        },
        async createCapacity1(_, { capacity1Info }) {
            var obj = JSON.stringify(capacity1Info);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new Capacity1(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        },
        async createCapacity2(_, { capacity2Info }) {
            var obj = JSON.stringify(capacity2Info);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new Capacity2(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        },
        async createCapacity2_1(_, { capacity2_1Info }) {
            var obj = JSON.stringify(capacity2_1Info);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new Capacity2_1(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        },
        async createBP3(_, { BibliographicProduction3Info }) {
            var obj = JSON.stringify(BibliographicProduction3Info);
            var a = JSON.parse(obj);
            for (var i in a) {
                const newInvestment = new BP3(a[i])
                await newInvestment.save()
            }
            return 'Hola';
        }
    }
};

function getFacultiesInvestment(faculty){
    switch(faculty){
        case "1":
            return 'CIENCIAS';
        break;
        case "2":
            return 'CIENCIAS AGROPECUARIAS';
        break;
        case "3":
            return 'CIENCIAS DE LA EDUCACION';
        break;
        case "4":
            return 'CIENCIAS DE LA SALUD';
        break;
        case "5":
            return 'CIENCIAS ECONOMICAS Y ADMINISTRATIVAS';
        break;
        case "6":
            return 'DERECHO Y CIENCIAS SOCIALES';
        break;
        case "7":
            return 'ESTUDIOS A DISTANCIA';
        break;
        case "8":
            return 'INGENIERIA';
        break;
        case "9":
            return 'CHIQUINQUIRA';
        break;
        case "10":
            return 'DUITAMA';
        break;
        case "11":
            return 'SOGAMOSO';
        break;
        default:
            console.log('Facultad no existente');
        break;
    }
}

function getFacultiesInvestment4(faculty){
    switch(faculty){
        case "1":
            return 'Ciencias';
        break;
        case "2":
            return 'Agropecuarias';
        break;
        case "3":
            return 'Educacion';
        break;
        case "4":
            return 'CIENCIAS DE LA SALUD';
        break;
        case "5":
            return 'Economicas';
        break;
        case "6":
            return 'DERECHO Y CIENCIAS SOCIALES';
        break;
        case "7":
            return 'FESAD';
        break;
        case "8":
            return 'INGENIERIA';
        break;
        case "9":
            return 'CHIQUINQUIRA';
        break;
        case "10":
            return 'Duitama';
        break;
        case "11":
            return 'Sogamoso';
        break;
        default:
            console.log('Facultad no existente');
        break;
    }
}

function getFacultiesInvestment5(faculty){
    switch(faculty){
        case "1":
            return 'Ciencias';
        break;
        case "2":
            return 'Ciencias Agropecuarias';
        break;
        case "3":
            return 'Ciencias de la Educación';
        break;
        case "4":
            return 'CIENCIAS DE LA SALUD';
        break;
        case "5":
            return 'Ciencias Economicas y administrativas';
        break;
        case "6":
            return 'Derecho y Ciencias Sociales';
        break;
        case "7":
            return 'Estudios a Distancia';
        break;
        case "8":
            return 'INGENIERIA';
        break;
        case "9":
            return 'Chiquinquirá';
        break;
        case "10":
            return 'Duitama';
        break;
        case "11":
            return 'Sogamoso';
        break;
        default:
            console.log('Facultad no existente');
        break;
    }
}

function getFacultiesInvestment6(faculty){
    switch(faculty){
        case "1":
            return 'Ciencias';
        break;
        case "2":
            return 'CIENCIAS AGROPECUARIAS';
        break;
        case "3":
            return 'Ciencias de la Educación';
        break;
        case "4":
            return 'CIENCIAS DE LA SALUD';
        break;
        case "5":
            return 'Ciencias Economicas y administrativas';
        break;
        case "6":
            return 'Derecho y Ciencias Sociales';
        break;
        case "7":
            return 'Estudios a Distancia';
        break;
        case "8":
            return 'INGENIERIA';
        break;
        case "9":
            return 'Chiquinquirá';
        break;
        case "10":
            return 'Duitama';
        break;
        case "11":
            return 'Sogamoso';
        break;
        default:
            console.log('Facultad no existente');
        break;
    }
}

function getFacultiesFormation1(faculty){
    switch(faculty){
        case "1":
            return 'CIENCIAS';
        break;
        case "2":
            return 'CIENCIAS AGROPECUARIAS';
        break;
        case "3":
            return 'CIENCIAS DE LA EDUCACION';
        break;
        case "4":
            return 'CIENCIAS DE LA SALUD';
        break;
        case "5":
            return 'CIENCIAS ECONOMICAS Y ADMINISTRATIVAS';
        break;
        case "6":
            return 'DERECHO Y CIENCIAS  SOCIALES';
        break;
        case "7":
            return 'ESTUDIOS A DISTANCIA';
        break;
        case "8":
            return 'INGENIERIA';
        break;
        case "9":
            return 'SECCIONAL CHIQUINQUIRA';
        break;
        case "10":
            return 'SECCIONAL DUITAMA';
        break;
        case "11":
            return 'SECCIONAL SOGAMOSO';
        break;
        default:
            console.log('Facultad no existente');
        break;
    }
}

function getFacultiesBP3(faculty){
    switch(faculty){
        case "1":
            return 'CIENCIAS';
        break;
        case "2":
            return 'CIENCIAS AGROPECUARIAS';
        break;
        case "3":
            return 'CIENCIAS DE LA EDUCACIÓN';
        break;
        case "4":
            return 'CIENCIAS DE LA SALUD';
        break;
        case "5":
            return 'CIENCIAS ECONÓMICAS Y ADMINISTRATIVAS';
        break;
        case "6":
            return 'DERECHO Y CIENCIAS SOCIALES';
        break;
        case "7":
            return 'ESTUDIOS A DISTANCIA';
        break;
        case "8":
            return 'INGENIERIA';
        break;
        case "9":
            return 'SECCIONAL CHIQUINQUIRA';
        break;
        case "10":
            return 'SECCIONAL DUITAMA';
        break;
        case "11":
            return 'SECCIONAL SOGAMOSO';
        break;
        default:
            console.log('Facultad no existente');
        break;
    }
}