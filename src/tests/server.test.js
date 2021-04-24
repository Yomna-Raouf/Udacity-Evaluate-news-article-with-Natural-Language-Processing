const supertest = require('supertest');
const app = require('../server/index')
const request = supertest(app); 

describe('Testing post endpoint', () => {
    it('testing /test endpoint', async (done) => {
        return request.get('/').then(data => {
            expect(data).toBeDefined();
            done();
        })
        .catch(e => {
            console.log(e)
            done();
        })
    });
})

