const {Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = require('../database')


 const Car = sequelize.define('Car', {
     id: {
         type: DataTypes.INTEGER,
         primaryKey:true
     },
     
     mark: {
         type: DataTypes.STRING,
     },
     model: {
         type:DataTypes.STRING
     }, 
     freezeTableName: true
 })

