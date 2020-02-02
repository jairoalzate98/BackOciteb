import express from 'express'
import cors from'cors'
import { connect } from './database'
import schema from './schema'

const app = express()
app.use(cors())
connect()

schema.applyMiddleware({
    app
})

app.listen(3000, () => {
    console.log('Server on 3000')
})