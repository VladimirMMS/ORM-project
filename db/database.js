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


sequelize
.sync()
.then((result) => {
    console.log("")
})
.catch((err) => {
    console.log(err)
})


module.exports = sequelize; 
