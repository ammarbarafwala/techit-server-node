'use strict'
const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    details: String,
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: Date,
    LastUpdated: Date,
    location: String,
    updates : [{
     type : mongoose.Schema.Types.ObjectId,
     ref : 'Updates'
    }],

    completionDetails: String,

    progress : {
        type: String,
        enum: ['OPEN', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETED', 'CLOSED'],
        default: 'OPEN'
    },
    priority: {
        type: String,
        enum: ['NOT_ASSIGNED', 'LOW', 'MEDIUM', 'HIGH'],
        default: 'NOT_ASSIGNED'
    },
    unit : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Unit'
       },
    requester: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
       },
    technicians : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
       }]
})




module.exports = mongoose.model('Ticket', ticketSchema);