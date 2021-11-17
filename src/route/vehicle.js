const Router = require('express')
const {getAllCar, createCar} = require('../controllers/vehicule.controllers')

const router = Router()

router.get('/', getAllCar)
router.post('/', createCar)



module.exports = router;