const csv = require('csvtojson'),
      csvFilePath = 'data.csv',
      {insertCsv} = require('../data-access/fin')


class CSVOps {
    
    async ReadCsv(){

     let jsonArray = await csv({ignoreEmpty: true}).fromFile(csvFilePath);

     for (let i in jsonArray) {
       
       if(jsonArray[i].open == 'null') {
          delete jsonArray[i]
       }

       if(jsonArray[i] && jsonArray[i].Date){

       jsonArray[i].stockDate = new Date(jsonArray[i].Date) 
       }


     }

     await insertCsv(jsonArray);

    }

}
module.exports = new CSVOps();