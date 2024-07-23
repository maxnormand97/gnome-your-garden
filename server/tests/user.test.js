const request = require('supertest');
const app = require('../app');
const User = require('../models/user');
const UserPlant = require('../models/userPlant');
const { userOne, userOneId, plantOne, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

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

describe('GET /users/add_plant/:plant_id', () => {
  test('Should add a plant to the users plant collection', async () => {
    await request(app).post(`/users/add_plant/${plantOne._id}`).set('Authorization', `Bearer ${userOne.tokens[0].token}`).send().expect(200);
    const user = await User.findById(userOneId);
    expect(user.plantIds[0]._id).toEqual(plantOne._id);
    // creates user plant document
    const userPlant = await UserPlant.findOne({ userId: userOneId });
    expect(userPlant.plantId).toEqual(plantOne._id);
  });
});

