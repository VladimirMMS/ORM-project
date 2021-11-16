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
 
 }, {
    freezeTableName: true
 })
 
 

module.exports = Vehicle;


