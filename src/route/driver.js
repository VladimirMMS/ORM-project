const Router = require('express')
const {getAllDriver, createDriver} = require('../controllers/driver.controllers')

const router = Router()

router.get('/', getAllDriver)
router.post('/', createDriver)



module.exports = router;