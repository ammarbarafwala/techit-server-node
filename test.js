const mongoose = require('mongoose');
const User = require('./models/user');
const Update = require('./models/update');
const Ticket = require('./models/ticket');
const Unit = require('./models/unit');

async function run() {
  await mongoose.connect('mongodb://localhost/techit');
  let tickets = await Ticket.find();
  console.log(tickets[0])
  console.log(tickets[0].populate("technicians").technicians)
  await mongoose.disconnect();
}

run();
