const request = require("request");

const api = request.defaults({
  baseUrl: 'http://localhost:3000/api',
  json: true
});

describe('Unit API Tests:', function () {

  let jwtToken = '';
	

  beforeAll(function (done) {
    api.post({
      url: '/',
      body: {
        username: 'parth',
		password: 'abcd'
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(200);
      jwtToken = body.token;
      done();
    });
  });
	
	
  // it('Get the technicians of a unit Pass', function (done) {
  //   api.get({
  //     url: '/units/5af09c8b4eba69dd0221d3cd/technicians',
  //     headers: {
  //       'Authorization': 'Bearer ' + jwtToken
  //     }
  //   }, function (err, res, body) {
  //     expect(res.statusCode).toBe(200);
  //    except(res.json.length).not.toBeLessThan(1)
  //     done();
  //   });
  // });
	
 it('Get the technicians of a unit Fail', function (done) {
    api.get({
      url: '/units/5af09c8b4eba69dd0221d3d0/technicians',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(401);
      done();
    });
  });
	
	
  //  it('Get the tickets submitted to a unit Pass', function (done) {
  //   api.get({
  //     url: '/units/5af09c8b4eba69dd0221d3cd/tickets',
  //     headers: {
  //       'Authorization': 'Bearer ' + jwtToken
  //     }
  //   }, function (err, res, body) {
  //     expect(res.statusCode).toBe(200);
  //    expect(res.json.length).not.toBeLessThan(1)
  //     done();
  //   });
  // });
	
	
	 it('Get the tickets submitted to a unit Fail', function (done) {
    api.get({
      url: '/units/5af09c8b4eba69dd0221d3cd/tickets',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(401);
      done();
    });
  });
	
  

});
