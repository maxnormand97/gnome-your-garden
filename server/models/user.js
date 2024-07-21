const mongoose = require('mongoose');
const validator = require('validator');
// TODO: set up later with model methods
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	// TODO: fix this it allows the creation of multiple users with the same email
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
				if (!validator.isEmail(value)) {
						throw new Error('Email is invalid')
				}
		}
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 7,
		validate(value) {
				// TODO: we can expand on this validation later
				if(value.includes('password')){
						throw new Error('Password invalid')
				}
		}
	},
	tokens: [{
		token: {
				type: String,
				required: true
		}
	}]
});

userSchema.methods.generateAuthToken = async function () {
	const user = this;
	// TODO: need to extract this secret to a config file
	const token = jwt.sign({ _id: user._id.toString
	()}, 'mysecret');
	user.tokens = user.tokens.concat({ token });
	await user.save();
	return token;
}

const User = mongoose.model('User', userSchema);

module.exports = User;
