const express = require('express');
const dogRouter = express.Router();

const dogController = require('../controllers/dog-controller');

// Request all dogs, send it to the / route
dogRouter.get('/', dogController.findAll);

// Request single dog, send it to the /:id route
dogRouter.get('/:id', dogController.findById);

module.exports = dogRouter;
