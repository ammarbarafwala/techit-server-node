const request = require("request");
const User = require('../models/user');

const api = request.defaults({
    baseUrl: 'http://localhost:3000/api',
    json: true
})

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
    it('Get User Tickets', function (done) {
        api.get({
            url: `/users/${id}/tickets`,
            headers: {
                'Authorization': 'Bearer ' + jwtToken
            }
        }, function (err, res, body) {
            console.log(body)
            expect(res.statusCode).toBe(200);
            done();
        });
    });
});