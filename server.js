// Environment variables
require('dotenv').config();
const Onfleet = require('@onfleet/node-onfleet');

// Setup express, port, and other libraries
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const onfleet = new Onfleet(process.env.onfleet_APIKEY);
const app = express();

// Configure the database
const mongoose = require('mongoose');

// Configure bodyParser andn directory info for 'src'
app.use(express.static(__dirname + 'src'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(process.env.mongodb_URI, {
  useNewUrlParser: true
}).then(() => {
  console.log('Connection to the database successful.');
}).catch(err => {
  console.log('Connection to the database failed; Exiting..\n\n', err);
  process.exit();
})

//Configure routes
const router = require('./routes/router');
app.use('/', router);

app.listen(PORT, function() {
  console.log(`Veev-OnFleet listening on ${ PORT }\n`);
});

module.exports = router;

/*
# Dependencies
node_modules
package-lock.json
package.json
*/
