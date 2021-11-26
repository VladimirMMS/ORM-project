const Router = require('express')
const {getAllDriver, createDriver, getDriverById} = require('../controllers/driver.controllers')

const router = Router()

router.get('/', getAllDriver)
router.get('/:id', getDriverById)
router.post('/', createDriver)



module.exports = router;