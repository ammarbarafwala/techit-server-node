const request = require("request");
const User = require('../models/user');

const api = request.defaults({
  baseUrl: 'http://localhost:3000/api',
  json: true
});

describe('Users API Tests:', function () {

  describe('Users API Tests:', function () {
    let jwtToken = '';
    let id = '';
    beforeAll(function (done) {
        api.post({
            url: '/login',
            body: {
                username: 'ammar',
                password: 'abcd'
            }
        }, function (err, res, body) {
            expect(res.statusCode).toBe(200);
            jwtToken = body.token;
            api.get({
                url: '/users/ammar'
            }, function (err, res, body) {
                expect(res.statusCode).toBe(200);
                id = body._id
                done()
            });
        });
    });

  it('Get A User Ticket Successful', function (done) {
    api.get({
      url: `/users/5af09c8b4eba69dd0221d3cf/tickets`,
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(200);
      expect(res.json).not.toBeLessThan(1);
      done();
    });
  });
	
  it('Get A User Ticket Fails', function (done) {
    api.get({
      url: '/users/5af09c8b4eba69dd0221d3d3/tickets',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      }
    }, function (err, res, body) {
      expect(res.statusCode).toBe(403);
      done();
    });
  });

});
})