const request = require('supertest');
const app = require('../app');
const User = require('../models/user');
const { userOne, userOneId, setupDatabase } = require('./fixtures/db');

beforeEach(async () => {
  await setupDatabase();
  await new User(userOne).save();
});

describe('POST /users', () => {
  test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
      firstname: 'John',
      lastname: 'Doe',
      email: 'johndoe@gmail.com',
      password: 'MyPass777!',
      }).expect(201);

      expect(response.body.user.email).toBe('johndoe@gmail.com');
  });
});

describe('POST /users/login', () => {
  test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
      email: userOne.email,
      password: userOne.password
    }).expect(200);

    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token);
  });
});

