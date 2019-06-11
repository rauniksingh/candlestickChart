const mongoose = require('mongoose');

let financeSchema = mongoose.Schema({
    Date: {
        type: Date
    },

    stockDate: {
     type: Date
    },
    
    open: {
        type: Number
    },

    high: {
        type: Number
    },

    low: {
        type: Number
    },

    close: {
        type: Number
    },

    adj_close: {
        type: Number
    },

    volume: {
        type: Number
    },

    userId:{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'users'
    }
},{
    timestamps: true
});


let financeModel = mongoose.model('stocks', financeSchema, 'stocks')
module.exports = financeModel
