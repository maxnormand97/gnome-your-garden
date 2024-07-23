const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const Plant = require('../../models/plants')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
  _id: userOneId,
  firstname: 'foo',
  lastname: 'bar',
  email: 'foo@gmail.com',
  password: 'Password123!',
  tokens: [{
      token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
  }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
  _id: userTwoId,
  firstname: 'bar',
  lastname: 'baz',
  email: 'baz@gmail.com',
  password: 'Password123!',
  tokens: [{
      token: jwt.sign({_id: userTwoId}, process.env.JWT_SECRET)
  }]
}

const plantOneId = new mongoose.Types.ObjectId()
const plantOne = {
  _id: plantOneId,
  name: "Snake Plant",
  description: "Snake Plant, also known as Mother-in-Law's Tongue, is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known for its ease of care and tall, architectural leaves.",
  light: "Can tolerate low light to bright, indirect light.",
  water: "Water sparingly, allowing the soil to dry out between waterings. Overwatering can lead to root rot.",
  temperature: "Ideal indoor temperature 18-27°C. It can tolerate minimum 10°C.",
  soilType: "Well-draining potting mix. Ideal pH is 6.0-7.0.",
  pruning: "Prune old leaves as needed to maintain its shape.",
  fertilization: "Fertilize once a month during the growing season with a balanced houseplant fertilizer.",
  habitat: "Tropical West Africa from Nigeria east to the Congo.",
  difficulty: "Easy"
}

const setupDatabase = async () => {
  await User.deleteMany()
  await Plant.deleteMany()
  await new User(userOne).save()
  await new User(userTwo).save()
  await new Plant(plantOne).save()
}

module.exports = {
  userOneId,
  userOne,
  userTwo,
  userTwoId,
  plantOne,
  setupDatabase
}