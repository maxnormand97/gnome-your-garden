const mongoose = require('mongoose');
const validator = require('validator');
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
	}],
  // many to many relationship with plants
  plantIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant'
  }]
});

// serialize user data
userSchema.methods.toJSON = function () {
    const user = this
    // create a dummy object of the user instance
    const userObject = user.toObject()
    // remove the things we don't want the client to see
    delete userObject.password
    delete userObject.tokens
    return userObject
}

// Instance method
userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({ _id: user._id.toString
	()}, process.env.JWT_SECRET);
	user.tokens = user.tokens.concat({ token });
	await user.save();
	return token;
}

// Class method
userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error('Unable to login');
	}

	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		throw new Error('Unable to login');
	}

	return user;
}

// Callbacks
// Encrypts user PW with bcrypt
userSchema.pre('save', async function (next) {
	const user = this;
	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8);
	}
	next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
