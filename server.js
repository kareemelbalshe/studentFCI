
import express from 'express'
import { engine } from "express-handlebars"
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
import routerlogin from './routes/login.js'
import routeuser from './routes/user.js'



mongoose.connect(process.env.mongo)

const app = express()

app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './templates')

app.use(express.static("./public"))


app.use('/login', routerlogin)

app.use('/user',routeuser)




app.listen(process.env.port, () => {
    console.log(`start at http://localhost:${process.env.port}/login`)
})