const express = require('express'),
      Router = express.Router();

      Router.use(express.static('public'));

Router.get('/index', (req, res)=> res.render('../views/index.ejs'));

module.exports = Router