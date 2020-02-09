import mongoose from 'mongoose'

export async function connect () {
    try {
        await mongoose.connect('mongodb+srv://jairo-alzate98:jairo980616@cluster0-7136w.gcp.mongodb.net/test?retryWrites=true&w=majority', {
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