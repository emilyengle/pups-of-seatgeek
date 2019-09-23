-- db/seeds/dogs.sql

DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
  id SERIAL PRIMARY KEY UNIQUE NOT NULL,
  name VARCHAR (256) NOT NULL,
  owner VARCHAR (256),
  insta VARCHAR (256),
  pic VARCHAR (256),
  num_votes integer,
  num_championships integer,
  num_finalfours integer,
  num_eliteeights integer
);

INSERT INTO dogs (name, owner, insta, pic, num_votes, num_championships, num_finalfours, num_eliteeights) VALUES
  (
    'Test Dog 1',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 2',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 3',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 4',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 5',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 6',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 7',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 8',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 9',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 10',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 11',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 12',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 13',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 14',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 15',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 16',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 17',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 18',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 19',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 20',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 21',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 22',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 23',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 24',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 25',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 26',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 27',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 28',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 29',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 30',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 31',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  ),
  (
    'Test Dog 32',
    'leah f',
    '',
    'https://github.com/emilyengle/pups-of-seatgeek/raw/master/img/minnie.png',
    0,
    0,
    0,
    0
  );
