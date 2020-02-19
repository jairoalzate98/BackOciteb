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
        async investmentList(_, {faculty}){
            return await Investement.aggregate([
                {$match: { 
                    FACULTAD: faculty
                }
                },
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
        },
        async Investment4List(_, {faculty}){
            return await Investement4.aggregate([
                {$match: { 
                    Facultad: faculty
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
            return await Investement5.aggregate([
                {$match: { 
                    Facultad: faculty
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
            return await Investement6.aggregate([
                {$match: { 
                    FACULTAD: faculty
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
        async Formation2List(_, {faculty}){
            return await Formation2.aggregate([
                {$match: {
                    Facultad: faculty
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
            return await Formation1.aggregate([
                {$match: {
                    Facultad: faculty
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
        async Capacity2List(_, {faculty}){
            return await Capacity2.aggregate([
                {$match: {
                    Facultad: faculty
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
            return await Capacity2_1.aggregate([
                {$match: {
                    Facultad: faculty
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
        async BibliographicProduction3(_, {faculty}){
            return await BP3.aggregate([
                {$match: {
                    FACULTAD2: faculty
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