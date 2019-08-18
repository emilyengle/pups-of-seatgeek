const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const path = require('path');
app.use(express.static('build'));

app.use('/api/dogs', require('./routes/dog-routes'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
