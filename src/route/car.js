const Router = require('express')
const getAllCar = require('../controllers/getAllCar')

const router = Router()

router.get('/', getAllCar)




module.exports = router;