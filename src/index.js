const express = require('express');
const morgan = require('morgan')
const routerCar = require('./route/car')
const app = express()
const sequelize = require('../db/database')
const Vehicle = require('../db/models/vehicleModel')
const Driver = require('../db/models/driverModel')

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())



Driver.hasMany(Vehicle)

// Driver.belongsTo(Car, {foreignKey:'driverId', sourceKey:'id'})

sequelize
.sync({force:true})
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.log(err)
})

app.use('/api', routerCar)



module.exports =app;