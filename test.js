const mongoose = require('mongoose');
const User = require('./models/user');
const Ticket = require('./models/ticket');
const Unit = require('./models/unit');

async function run() {
  await mongoose.connect('mongodb://localhost/techit');
  let tickets = await Ticket.find().populate('technicians')
  // console.log(tickets)
  let users = await User.find()
  console.log(users)
  await mongoose.disconnect();
}

run();
