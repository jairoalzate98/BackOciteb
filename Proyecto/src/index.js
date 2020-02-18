import express from 'express'
import cors from'cors'
import { connect } from './database'
import schema from './schema'
var bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(cors())
connect()

app.get('/', function(err, res) {
    res.send('Hola');
});

schema.applyMiddleware({
    app
})

app.listen(3000, () => {
    console.log('Server on 3000')
})