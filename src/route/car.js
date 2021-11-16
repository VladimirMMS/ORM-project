const Router = require('express')
const {getAllCar, createCar} = require('../controllers/car.controllers')

const router = Router()

router.get('/', getAllCar)
router.post('/', createCar)



module.exports = router;