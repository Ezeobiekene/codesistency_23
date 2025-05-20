import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/product.route.js'

dotenv.config()

//port
const port = process.env.PORT || 5000

//server setup
const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)


app.listen(port, () => {
    connectDB()
    console.log('Server started at port', port)
})