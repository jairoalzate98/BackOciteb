import mongoose from 'mongoose'

export async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/ociteb', {
            useNewUrlParser: true
        });
        console.log('>>> Conectado a la base de datos ociteb');
    }
    catch(e) {
        console.log('Algo no esta bien');
        console.log(e);
    }
}