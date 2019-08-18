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

module.exports = Dog;
