const request = require('supertest');
const app = require('../src/index');

describe('API Tests', () => {
  it('GET / responde 200 y un JSON con message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });

  it('GET /hits/value responde con count', async () => {
    const res = await request(app).get('/hits/value');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('count');
  });
});
