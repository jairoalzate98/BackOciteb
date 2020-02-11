import Investement from './models/Investement';
import Investement4 from './models/Investment4';
import Investement5 from './models/Investment5';
import Investement6 from './models/Investement6';

export const resolvers = {
    Query: {
        
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
        }
    }
};