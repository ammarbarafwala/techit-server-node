'use strict'
const mongoose = require('mongoose')

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    phone: String,
    location: String,
   email : String,
   description: String,
   tickets : [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Ticket'
   }],
   technicians : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}],

})




module.exports = mongoose.model('Unit', ticketSchema);