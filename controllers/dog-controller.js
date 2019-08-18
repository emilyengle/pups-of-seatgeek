const Dog =  require('../models/dog');

const dogController = {};

// Fetch all dogs
dogController.findAll = (req, res) => {
  Dog.findAll()
  .then(dogs => {
    res.json({
      message: 'Success',
      data: dogs
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

// Fetch a single dog
dogController.findById = (req, res) => {
  Dog.findById(req.params.id)
  .then(dog => {
    res.json({
      message: "Success",
      data: dog
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

module.exports = dogController;
