const express = require('express');
const morgan = require('morgan')
const routerCar = require('./route/car')
const app = express()

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/api', routerCar)



module.exports =app;