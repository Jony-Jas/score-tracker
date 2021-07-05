const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');
const services = require('../services/render');
const path = require('path');


    route.get('/', services.homeRoutes);
    route.get('/score', services.score);
    route.get('/scoreboard', services.scoreboard);    

    route.post('/api/users', controller.create);
    route.get('/api/users/', controller.find);
    route.put('/api/items/:id', controller.update);
    route.get('/find/:query',controller.check);
    route.delete('/api/delete',controller.delete);
    
    



    module.exports = route;