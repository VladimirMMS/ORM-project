const Sequelize = require('sequelize')
const sequelize = require('../database')
const Driver = require('./driverModel')

 const Car = sequelize.define('Car', {
     id: {
         type: Sequelize.INTEGER,
         autoIncrement:true,
         primaryKey:true
     },

     mark: {
         type: Sequelize.STRING,
     },
     
     driverId: {
        type: Sequelize.INTEGER
     },
     model: {
         type:Sequelize.STRING
     },
 
 }, {
    freezeTableName: true
 })
 
 
Car.hasOne(Driver, {foreignKey: 'driverId', sourceKey:'id'})
Driver.belongsTo(Car, {foreignKey:'driverId', sourceKey:'id'})

module.exports = Car;


