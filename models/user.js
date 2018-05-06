'use strict'

const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    hash: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    enabled: {
        type: Boolean,
        default: true
    },
    phone: Number,
    post: {
        type: String,
        uppercase: true,
        enum: ['SYS_ADMIN', 'SUPERVISING_TECHNICIAN', 'TECHNICIAN', 'USER'],
        default: 'USER'
    },
    department: String,
    ticketsRequested:{
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket'
        }],
        select: false
    },
    ticketsAssigned:{
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ticket'
        }],
        select: false
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unit',
        default: null
    }
})
userSchema.methods.toJSON = function (){
    let obj = this.toObject()
    delete obj.hash
    return obj
}
module.exports = mongoose.model('User', userSchema);