const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

require('dotenv').config();

app.use(express.static(__dirname + 'src'));

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/src/index.html');
});

app.use(function(req, res, next) {
  res.status(404).send("Sorry, that route doesn't exist.");
})

app.listen(PORT, function() {
  console.log(`Veev-OnFleet listening on ${ PORT }`);
});
