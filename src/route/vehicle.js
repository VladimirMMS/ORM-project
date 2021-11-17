const Router = require('express')
const {getAllCar, createCar, getVehicleById} = require('../controllers/vehicule.controllers')

const router = Router()

router.get('/', getAllCar)
router.post('/', createCar)
router.get('/:id', getVehicleById)



module.exports = router;