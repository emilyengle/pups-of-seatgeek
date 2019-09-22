const db = require('../db/config');

const Dog = {};

// Returns all dogs from the table
Dog.findAll = () => {
  return db.query(`SELECT * FROM dogs`);
};

// Return one dog with the specific id
Dog.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM dogs WHERE id = $1`, [id]);
};

Dog.incrementSweetSixteenVote = (id, newCount) => {
  return db.none('UPDATE dogs SET num_sweetsixteens = $1 WHERE id = $2;' , [newCount, id]);
};

Dog.incrementEliteEightVote = (id, newCount) => {
  return db.none('UPDATE dogs SET num_eliteeights = $1 WHERE id = $2;' , [newCount, id]);
};

Dog.incrementFinalFourVote = (id, newCount) => {
  return db.none('UPDATE dogs SET num_finalfours = $1 WHERE id = $2;' , [newCount, id]);
};

Dog.incrementChampionshipVote = (id, newCount) => {
  return db.none('UPDATE dogs SET num_championships = $1 WHERE id = $2;' , [newCount, id]);
};

Dog.incrementWinnerVote = (id, newCount) => {
  return db.none('UPDATE dogs SET num_votes = $1 WHERE id = $2;' , [newCount, id]);
};

// Add a new dog
Dog.addDog = (name, parent, insta, pic) => {
  const instaHandle = insta ? insta : '';
  return db.none('INSERT INTO dogs (name, owner, insta, pic, breed, num_votes, num_championships, num_finalfours, num_eliteeights, num_sweetsixteens) VALUES ($1, $2, $3, $4, \'\', 0, 0, 0, 0, 0)', [name, parent, instaHandle, pic]);
}

module.exports = Dog;
