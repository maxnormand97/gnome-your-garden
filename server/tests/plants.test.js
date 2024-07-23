const request = require('supertest');
const app = require('../app');
const Plant = require('../models/plants');
const User = require('../models/user');
const { setupDatabase, userOne, plantOne } = require('./fixtures/db');

beforeEach(setupDatabase);

describe('POST /plants', () => {
    test('Should create a new plant', async () => {
      const testData = {
          "name": "Snake Plant",
          "description": "Snake Plant, also known as Mother-in-Law's Tongue, is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known for its ease of care and tall, architectural leaves.",
          "light": "Can tolerate low light to bright, indirect light.",
          "water": "Water sparingly, allowing the soil to dry out between waterings. Overwatering can lead to root rot.",
          "temperature": "Ideal indoor temperature 18-27°C. It can tolerate minimum 10°C.",
          "soilType": "Well-draining potting mix. Ideal pH is 6.0-7.0.",
          "pruning": "Prune old leaves as needed to maintain its shape.",
          "fertilization": "Fertilize once a month during the growing season with a balanced houseplant fertilizer.",
          "habitat": "Tropical West Africa from Nigeria east to the Congo.",
          "difficulty": "Easy"
      }
      const response = await request(app).post('/plants').send(testData).expect(201);
      expect(response.body.name).toBe('Snake Plant');
    });
  }
);

describe('GET /plants/:id', () => {
    test('Should get the details for a plant', async () => {
      const response = await request(app).get(`/plants/${plantOne._id}`)
                                         .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
                                         .send()
                                         .expect(200);
      expect(response.body.name).toBe('Snake Plant');
    });
  }
);
