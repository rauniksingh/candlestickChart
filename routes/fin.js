const express = require('express'),
      app = express.Router(),
      fin = require('../services/fin');

app.get('/readCsv', fin._readCsv)
    .get('/stockData', fin._getStockData)

module.exports = app;      