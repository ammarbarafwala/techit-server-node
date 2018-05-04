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
    password: {
        type: String,
        required: true,
        trim: true
    },
    hash: {
        type: String,
        required: true
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
    ticketsRequested:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tickets'
    }],
    ticketsAssigned:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tickets'
    }],
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Units'
    }
})

module.exports = mongoose.model('User', userSchema);