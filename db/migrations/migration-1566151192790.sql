-- db/migrations/migration-1566151192790.sql

DROP TABLE IF EXISTS dogs;

CREATE TABLE IF NOT EXISTS dogs (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(256),
  owner VARCHAR(50),
  insta VARCHAR(50),
  breed VARCHAR(50),
  num_votes INTEGER,
  num_championships INTEGER,
  num_finalfours INTEGER,
  num_eliteeights INTEGER,
  num_sweetsixteens INTEGER
);
