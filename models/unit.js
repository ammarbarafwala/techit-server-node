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
    email : {
        type:String,
        unique:true
    },
    description: String,
    tickets : {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket'
        }],
        select: false
    },
    technicians : {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        select: false
    },
})

module.exports = mongoose.model('Unit', unitSchema);