const mongoose = require('mongoose');
const User = require('./models/user');
const Update = require('./models/update');
const Ticket = require('./models/ticket');
const Unit = require('./models/unit');

async function run() {
  await mongoose.connect('mongodb://localhost/techit');


  // insert a new user
  /*let user = new User({
    username: "tom",
    firstName: 'Tom',
    lastName: 'Smith',
    password : 'abcd',
    email: 'tom@localhost',
    post: 'USER'
  });
  user = await user.save();
  console.log(user);*/

  // change email to 'tsmith@localhost'


  // search users
 /* let users = await User.find().populate('ticketsAssigned');;
  users.forEach(user => console.log(user.unit));*/

 

  

  await mongoose.disconnect();
}

run();
