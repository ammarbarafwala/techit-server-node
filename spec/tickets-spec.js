const request = require("request");

const api = request.defaults({
  baseUrl: 'http://localhost:3000/api',
  json: true
});

describe('Tickets API Tests:', function () {

  let jwtToken = '';
	
  let ticket = {
    subject: "Mobile is broken"
}

  beforeAll(function (done) {
    api.post({
      url: '/login',
      body: {
    username: 'ammar',
		password: 'abcd'
      }
    }, function (err, res, body) {
      console.log(err)
      expect(res.statusCode).toBe(200);
      jwtToken = body.token;
      done();
    });
  });

  it('Create Ticket success', function (done) {
    api.post({
      url: '/tickets',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      },body: ticket
    }, function (err, res, body) {
      expect(res.statusCode).toBe(200);
      console.log(res)
      expect(body.subject).not.toBe(' ');
      done();
    });
  });
	
  it('Create Ticket Fails', function (done) {
    api.post({
      url: '/tickets',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      },
      body:{}
    }, function (err, res, body) {
      expect(res.statusCode).toBe(500);
      done();
    });
  });
	
	
   it('Get the technicians assigned to a ticket Pass', function (done) {
    api.get({
      url: '/tickets/5af09c8b4eba69dd0221d3d5/technicians',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(200);
	  expect(body.length).not.toBeLessThan(1)
      done();
    });
  });
	
	
   it('Get the technicians assigned to a ticket Fail', function (done) {
    api.get({
      url: '/tickets/5af09c8b4eba69dd0221d3d5/technicians',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(403);
      done();
    });
  });
	
	
    it('Set the status of a ticke Pass', function (done) {
    api.put({
      url: '/tickets/5af09c8b4eba69dd0221d3d5/status/IN_PROGRESS',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      },
	 body:{
		 description:'Status changed to InProgress'
	 }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(200);
    
      expect(body.progress).toBe('IN_PROGRESS')
      done();
    });
  });
	
	
	it('Set the status of a ticke Fail', function (done) {
    api.put({
      url: '/tickets/5af09c8b4eba69dd0221d3d5/status/onprogress',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      },
	 body:{
		 description:'Status changed to InProgress'
	 }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(403);
      done();
    });
  });
	
	it('Set the status of a ticke Pass', function (done) {
    api.put({
      url: '/tickets/5af09c8b4eba69dd0221d3d5/priority/HIGH',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      },
	
    }, function (err, res, body) {
      expect(res.statusCode).toBe(200);
	  expect(body.priority).toBe('HIGH')
      done();
    });
  });
	
	it('Set the status of a ticke Fail', function (done) {
    api.put({
      url: '/tickets/5af09c8b4eba69dd0221d3d5/priority/HIGH',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      },
	 body:{
		 description:'Status changed to InProgress'
	 }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(403);
      done();
    });
  });
	
  

});