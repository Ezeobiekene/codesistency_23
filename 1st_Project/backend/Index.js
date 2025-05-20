import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()

//port
const port = process.env.PORT || 5000

//server setup
const app = express()
app.use(cors())

app.get('/products', (req, res) => {
    res.send('Server is ready')
})

app.listen(port, () => {
    console.log('Server started at port', port)
})