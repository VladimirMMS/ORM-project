const Car = require('../../db/models/carModel')
 
function getAllCar(req, res) {

    const cars = Car.findAll()

    console.log(cars)
    res.json({
        data:cars
    })    
    
}

function createCar(req, res) {
    
    const {mark, driverId, model} = req.body

    try {
        let newCar = Car.create({
            mark,
            driverId,
            model
        })

        if(newCar) {
            res.status(202).json({message:"Car assigned successfully"})
        }
        
    } catch (error) {
        res.status(504).json({message:"Something was wrong with the server"})
    }
    

}


module.exports = {
    getAllCar,
    createCar
} 