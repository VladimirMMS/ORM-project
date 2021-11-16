const Sequelize = require('sequelize')
const sequelize = require('../database')


const Driver = sequelize.define('Driver', {
     id: {
         type: Sequelize.INTEGER,
         autoIncrement:true,
         allowNull:false,
         primaryKey:true
     },
     name: {
         type: Sequelize.STRING,
     },
     
     destiny: {
         type:Sequelize.STRING
     }
 }, {
     freezeTableName:true,
 })




module.exports = Driver;
