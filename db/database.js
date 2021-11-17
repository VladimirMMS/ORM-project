const {Sequelize} = require('sequelize')


const sequelize = new Sequelize(
    'carCompany',
    'postgres',
    '20012020',
    {
        host:'localhost',
        dialect:'postgres',
    }
)



module.exports = sequelize; 
