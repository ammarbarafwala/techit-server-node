// const mongoose = require('mongoose');
// const User = require('./models/user');
// const Ticket = require('./models/ticket');
// const Unit = require('./models/unit');

// async function run() {
//   await mongoose.connect('mongodb://localhost/techit');
//   let tickets = await Ticket.find().populate('technicians')
//   // console.log(tickets)
//   let users = await User.find()
//   console.log(users)
//   await mongoose.disconnect();
// }

// run();
db = connect('localhost/techit');
cursor = db.units.find({_id: '5aef8d9176f6c33be731b9f6'});
while (cursor.hasNext()) {
    printjson(cursor.next());
}