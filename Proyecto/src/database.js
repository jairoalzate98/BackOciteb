import mongoose from 'mongoose'

export async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/ociteb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado base de datos');
    }
    catch(e) {
        console.log('Algo no esta bien');
        console.log(e);
    }
}