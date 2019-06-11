const StockModel = require('../model/data');

class  AccessCsvData {
       
       async insertCsv(data) {
          await StockModel.insertMany(data);
          return true
       };

       async getStockData(filter, limit) {
        
          let result = await StockModel.find(filter).select('Date open high low close -_id').sort('-Date').limit(limit).lean();
          return result
       }
}

module.exports = new AccessCsvData();

