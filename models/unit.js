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
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    technicians :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    versionKey: false,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.tickets
            delete ret.technicians
        }
    }
})

module.exports = mongoose.model('Unit', unitSchema);