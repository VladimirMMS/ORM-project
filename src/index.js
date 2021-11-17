const express = require('express');
const morgan = require('morgan')
const routerCar = require('./route/vehicle')
const routerDriver = require('./route/driver')
const app = express()
const sequelize = require('../db/database')
const Vehicle = require('../db/models/vehicleModel')
const Driver = require('../db/models/driverModel')

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())



Driver.hasMany(Vehicle)


sequelize
.sync({force:true})
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})

app.use('/api/vehicle', routerCar)
app.use('/api/driver', routerDriver)


module.exports =app;