/*
  Sorry I didn't have enough time to make good tests. I've had a pretty busy week, 
  so I started coding this assignment few hours before the deadline :/
*/

import supertest from 'supertest';
import app from '../app';

const api = supertest(app);

test('discovery is returned as json', async () => {
  await api
    .get('/discovery?lat=24.938082&lon=60.17626')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test("Dummy unit test", () => {
  const num = 1;
  expect(num).toBe(1);
});