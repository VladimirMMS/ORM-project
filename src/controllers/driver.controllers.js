const Driver = require('../../db/models/driverModel')
 
async function getAllDriver(req, res) {
    const driver = await Driver.findAll()
    res.json({data:driver})    
}

async function getVehicleById(req, res) {
    
    let idDriver = parseInt(req.params.id)
 
     const newDriver = await Driver.findOne({
         where: {
             id: idDriver
         }
     })
     res.json({
         data:newDriver
     })  
 }


async function createDriver(req, res) {
    
    const {name, rank, licenseType} = req.body
    try {
        let newDriver = await Driver.create({
            name,
            rank,
            licenseType
        })

        if(newDriver) {
            res.status(202).json({message:"Driver was registered successfully"})
        }
        
    } catch (error) {
        res.status(504).json({message:"Something was wrong with the server"})
    }
}

module.exports = {
    getAllDriver,
    createDriver
}