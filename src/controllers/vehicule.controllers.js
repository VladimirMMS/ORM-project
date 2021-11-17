const Vehicle = require('../../db/models/vehicleModel')
 
async function getAllCar(req, res) {

    const cars = await Vehicle.findAll()

    res.json({data:cars})    
    
}

async function createCar(req, res) {
    
    const {mark, driverId, model} = req.body
    try {
        let newCar = await Vehicle.create({
            mark,
            driverId,
            model
        })

        if(newCar) {
            res.status(202).json({message:"Vehicle was registred successfully"})
        }
        
    } catch (error) {
        res.status(504).json({message:"Something was wrong with the server"})
    }
}

module.exports = {
    getAllCar,
    createCar
} 