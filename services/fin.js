const __ = require('../utils/response'),
      csvOps = require('../utils/csvOps'),
      moment = require('moment'),
      FinDataAccess = require('../data-access/fin');

class Finance {

//---------------Import Data from CSV----------
   async _readCsv(req, res) {
      try {

       // return res.send ({message: "This Api End point deprecated. Only used once to insert data in database"})
          
         await csvOps.ReadCsv();
         __.successMsg(res, 200, '', "Data imported from Csv successfully");


     } catch (error) {
         __.errorMsg(res, 500, 'Internal server error', error);      
       };
    };

    async _getStockData(req, res) {
      try {

  
   let end = new Date(req.query.endDate),
       start = new Date(req.query.startDate)

       let queryFilter = { stockDate: { $gte: new Date(start.toISOString())  }, stockDate: {$lte: new Date(end.toISOString()) }}

       let limit = parseInt(req.query.limit)

       let stockData = await FinDataAccess.getStockData(queryFilter, limit);

       return __.successMsg(res, 200, stockData, 'Stock data received') 

      } catch (error) {
         __.errorMsg(res, 500, 'Internal server error', error);
      };

    };
 
};

module.exports = new Finance();