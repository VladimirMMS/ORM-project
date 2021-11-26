const Vehicle = require('../db/models/vehicleModel')
const Driver = require('../db/models/driverModel')


Vehicle.hasMany(Driver, {foreignKey:'driverId', sourceKey:'id'})