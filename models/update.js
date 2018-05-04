'use strict'
const mongoose = require('mongoose')

const updateSchema = new mongoose.Schema({
   modifier : {
       type: mongoose.Schema.Types.ObjectId,
       ref : 'User'
   },
   updateDetails : {
       type: String,
       required: true
   },
   modifiedDate : {
       type: Date,
       default: Date.now
   },
   ticket :{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Ticket'
   }

})




module.exports = mongoose.model('Update', updateSchema);