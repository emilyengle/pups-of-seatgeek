const express = require('express');
const dogRouter = express.Router();

const dogController = require('../controllers/dog-controller');

// Request all dogs, send it to the / route
dogRouter.get('/', dogController.findAll);

// Get total number of votes cast for all dogs
dogRouter.get('/votes', dogController.countVotes);

// Request single dog, send it to the /:id route
dogRouter.get('/:id', dogController.findById);

// Count a dog in someone's sweet sixteen, elite eight, etc
dogRouter.post('/:id/sweet-sixteen', dogController.countSweetSixteen);
dogRouter.post('/:id/elite-eight', dogController.countEliteEight);
dogRouter.post('/:id/final-four', dogController.countFinalFour);
dogRouter.post('/:id/championship', dogController.countChampionship);
dogRouter.post('/:id/winner', dogController.countWinner);

// Add a dog
dogRouter.post('/add', dogController.addDog);

module.exports = dogRouter;
