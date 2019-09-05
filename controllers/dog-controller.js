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

// Get total number of votes cast for all dogs
dogController.countVotes = (req, res) => {
  Dog.findAll().then(dogs => {
    let totalVotes = 0;
    for (const dog of dogs) {
      totalVotes += dog.num_votes;
    }
    res.json({
      message: 'Success',
      data: totalVotes
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

// Count a dog in someone's sweet sixteen, elite eight, etc
dogController.countSweetSixteen = (req, res) => {
  const dogId = req.params.id;

  Dog.findById(dogId).then(dog => {
    const newVoteCount = dog.num_sweetsixteens + 1;

    Dog.incrementSweetSixteenVote(dogId, newVoteCount);

    res.status(200).json({
      message: 'Success',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

dogController.countEliteEight = (req, res) => {
  const dogId = req.params.id;

  Dog.findById(dogId).then(dog => {
    const newVoteCount = dog.num_eliteeights + 1;

    Dog.incrementEliteEightVote(dogId, newVoteCount);

    res.status(200).json({
      message: 'Success',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

dogController.countFinalFour = (req, res) => {
  const dogId = req.params.id;

  Dog.findById(dogId).then(dog => {
    const newVoteCount = dog.num_finalfours + 1;

    Dog.incrementFinalFourVote(dogId, newVoteCount);

    res.status(200).json({
      message: 'Success',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

dogController.countChampionship = (req, res) => {
  const dogId = req.params.id;

  Dog.findById(dogId).then(dog => {
    const newVoteCount = dog.num_championships + 1;

    Dog.incrementChampionshipVote(dogId, newVoteCount);

    res.status(200).json({
      message: 'Success',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

dogController.countWinner = (req, res) => {
  const dogId = req.params.id;

  Dog.findById(dogId).then(dog => {
    const newVoteCount = dog.num_votes + 1;

    Dog.incrementWinnerVote(dogId, newVoteCount);

    res.status(200).json({
      message: 'Success',
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

module.exports = dogController;
