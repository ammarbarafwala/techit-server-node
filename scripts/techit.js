
db = connect('localhost/techit');

db.users.drop();
db.tickets.drop();
db.units.drop();
db.updates.drop();

// create a unique index on the email field in user

db.users.createIndex({
  email: 1
}, {
  unique: true
});

db.users.createIndex({
    username: 1
  }, {
    unique: true
  });

  db.units.createIndex({
    email: 1
  }, {
    unique: true
  });
  
  db.units.createIndex({
      name: 1
    }, {
      unique: true
    });

unitId1 = db.units.insertOne({
    description: "Testing", 
    email: "testin@g.com", 
    location: "KH", 
    name: "Testing",
    phone: "123456"
}).insertedId

unitId2 = db.units.insertOne({
    description: "Testing2", 
    email: "testin2@g.com", 
    location: "KH2", 
    name: "Testing2",
    phone: "987654"
}).insertedId

// insert two users and get the generated _id

userId1 = db.users.insertOne({
    username:"admin", 
    hash:"$2a$10$4Mss6qmmc8FLwLe8sIXrP.1Y1B41Hgagi4nKDmeqk3kT1POnbzmI6", 
    firstName: "Admin", 
    lastName:"Admin", 
    email: "admin@localhost.com",
    post: "SYS_ADMIN"
}).insertedId;

userId2 = db.users.insertOne({
    username:"ammar", 
    hash:"$2a$10$4Mss6qmmc8FLwLe8sIXrP.1Y1B41Hgagi4nKDmeqk3kT1POnbzmI6", 
    firstName: "Ammar", 
    lastName:"Barafwala", 
    email: "ammar@localhost.com",
    unit: unitId1, 
    post: "SUPERVISING_TECHNICIAN"
}).insertedId;

userId3 = db.users.insertOne({
    username:"kenny", 
    hash:"$2a$10$4Mss6qmmc8FLwLe8sIXrP.1Y1B41Hgagi4nKDmeqk3kT1POnbzmI6", 
    firstName: "Adekola", 
    lastName:"Togunloju", 
    email: "kenny@localhost.com",
    unit: unitId1, 
    post: "SUPERVISING_TECHNICIAN"
}).insertedId;

userId4 = db.users.insertOne({
    username:"viccena", 
    hash:"$2a$10$4Mss6qmmc8FLwLe8sIXrP.1Y1B41Hgagi4nKDmeqk3kT1POnbzmI6", 
    firstName: "Vicky", 
    lastName:"Saravanan", 
    email: "viccenna@localhost.com",
    unit: unitId1, 
    post: "TECHNICIAN"
}).insertedId;

userId5 = db.users.insertOne({
    username:"parth", 
    hash:"$2a$10$4Mss6qmmc8FLwLe8sIXrP.1Y1B41Hgagi4nKDmeqk3kT1POnbzmI6", 
    firstName: "Parth", 
    lastName:"Patel", 
    email: "parth@localhost.com",
    post: "USER"
}).insertedId;

ticketId1 = db.ticket.insertOne({
   subject: "AC is broken", 
   requester: userId4, 
   unit: unitId1,
   technicians : [userId2, userId4]
})

ticketId2 = db.ticket.insertOne({
    subject: "Projector Repair", 
    requester: userId2, 
    unit: unitId2
 })
 ticketId2 = db.ticket.insertOne({
    subject: "Computer Failure", 
    requester: userId3, 
    unit: unitId1,
    technicians : [userId4]
 })
 ticketId4 = db.ticket.insertOne({
    subject: "Peeling Paint", 
    requester: userId3, 
    unit: unitId1
 })

 db.updates.insert([
     {
       details: "Demo",
       ticket_id: ticketId1,
       modifier: userId2  
     },
     {
        details: "Demo2",
        ticket_id: ticketId1,
        modifier: userId2  
      }
 ])








