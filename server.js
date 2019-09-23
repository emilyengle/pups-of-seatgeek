const express = require('express');
const app = express();
const rateLimit = require("express-rate-limit");


const PORT = process.env.PORT || 3000;

const path = require('path');
app.use(express.static('build'));

app.set('trust proxy', 1);

const skip = (req) => req.method === "GET"

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // rate limit per hour
  max: 45, // requests
  skip: skip // don't count GET
});

app.use(limiter);

app.use('/api/dogs', require('./routes/dog-routes'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
