var mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose')

var UserSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String
})

UserSchema.plugin(passportLocalMongoose, {
	usernameField: 'username',
	usernameQueryFields: ['email']
})

module.exports = mongoose.model('User', UserSchema)
