const express = require('express');
const morgan = require('morgan')
const routerCar = require('./route/vehicle')
const routerDriver = require('./route/driver')
const app = express()


app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/api/vehicle', routerCar)
app.use('/api/driver', routerDriver)


module.exports =app;