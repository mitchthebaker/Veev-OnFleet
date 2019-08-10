const express = require('express');
const router = express.Router();

// Mongoose models
const adminModel = require('../models/model_Admin');

module.exports = function() {
  router.get('/', function(req, res, next) {
    //let hasKey = onfleet.verifyKey();
        //console.log(hasKey);

    res.sendFile(__dirname + '/src/index.html');
  });

  router.get('/admins', async (req, res) => {
    const admins = await adminModel.find({});

    try {
      res.send(admins);
    }
    catch(err) {
      res.status(500).send(err);
    }
  });

  router.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist.");
  });

  return router;
};

module.exports = router;
