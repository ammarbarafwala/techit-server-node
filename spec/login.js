
const request = require("request");

const api = request.defaults({
  baseUrl: 'http://localhost:3000/api',
  json: true
});

describe('Login Tests:', function () {
  it('Login success', function (done) {
    api.post({
      url: '/login',
      body: {
        username: 'parth',
		    password:'abcd'
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
	
   it('Login Failure', function (done) {
    api.post({
      url: '/login',
      body: {
        username: 'parth',
		    password:'abcdk'
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(401);
      done();
    });
  });
});