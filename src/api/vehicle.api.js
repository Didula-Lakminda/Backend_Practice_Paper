const express = require('express');
const router = express.Router();
const controller = require('../controllers/vehicle.controller');

module.exports = function () {
    router.post('/create', controller.createVehicle);
    router.get('/get', controller.getAllVehicles);
    //router.get('/:id', controller.getVehicleForCategory);
    router.get('/amount/:id/:duration', controller.calculateRent);
    router.delete('/delete/:id', controller.Delete);
    router.get('/findvehicle/:id', controller.FindVehicle);
    router.put('/update/:id', controller.Update);
    return router;
}