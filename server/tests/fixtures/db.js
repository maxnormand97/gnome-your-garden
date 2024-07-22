const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')

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

const setupDatabase = async () => {
  await User.deleteMany()
}

module.exports = {
  userOneId,
  userOne,
  userTwo,
  userTwoId,
  setupDatabase
}