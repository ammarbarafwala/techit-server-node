const request = require("request");
const api = request.defaults({
    baseUrl: 'http://localhost:3000/api',
    json: true
})

describe('Users API Tests:', function () {
    let jwtToken = '';
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
            done();
        });
    });
    console.log("jwtToken")
    it('Get A User', function (done) {
        api.get({
            url: '/users/5af01c4c0a360ded1f315035/tickets',
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