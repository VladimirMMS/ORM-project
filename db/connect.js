const sequelize = require('../db/database')


sequelize
.sync({force:true})
.then((result) => {
    return ""
})
.catch((err) => {
    console.log(err)
})
