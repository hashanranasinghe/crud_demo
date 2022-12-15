const express = require('express');
const route = express.Router();
const service = require('../services/service')
const controller = require('../controller/controller')

route.get('/',service.homeRoute);

route.get('/add_user',service.addRoute);

route.get('/update_user',service.updateRoute);

//Api
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)


module.exports = route; 