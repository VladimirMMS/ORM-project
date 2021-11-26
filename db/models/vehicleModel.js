const Sequelize = require('sequelize')
const sequelize = require('../database')

 const Vehicle = sequelize.define('Vehicle', {
     id: {
         type: Sequelize.INTEGER,
         autoIncrement:true,
         allowNull:false,
         primaryKey:true
     },

     mark: {
         type: Sequelize.STRING,
     },
     
     model: {
         type:Sequelize.STRING
     },
     driverId: {
         allowNull:false,
         type: Sequelize.UUID
     }
 
 }, {
    freezeTableName: true
 })
 
 

module.exports = Vehicle;


