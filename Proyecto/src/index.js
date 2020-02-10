import express from 'express'
import cors from'cors'
import { connect } from './database'
import schema from './schema'
var bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(cors())
connect()

schema.applyMiddleware({
    app
})

app.listen(3000, () => {
    console.log('Server on 3000')
})