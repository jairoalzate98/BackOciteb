import Investement from './models/Investement';

export const resolvers = {
    Query: {
        
    },
    Mutation: {
        async createInvestment(_, { investmentInfo }) {
            console.log(investmentInfo)
            const newInvestment = new Investement(investmentInfo)
            await newInvestment.save()
            return newInvestment;
        }
    }
};