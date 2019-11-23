const request = require('supertest')
const app = require('../app');

describe('POST /records', function() {
    it('It should response the POST method', function(done) {
      request(app)
        .post('/api/v1/records')
        .send({
                startDate: "1978-12-20",
                endDate: "1978-12-20",
                minCount: 2700,
                maxCount: 3000
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
});