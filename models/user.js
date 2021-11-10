import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

//Create a User Schema 
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, maxlength: 30 },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
})

userSchema.plugin(uniqueValidator)

//Remove the password when returning the user as JSON
userSchema.set('toJSON', {
    virtuals: true,
    transform(_doc, json) {
      delete json.password
      return json
    },
  })

//Creating a virtual for password confirmation 
userSchema.virtual('passwordConfirmation').set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
})

//Custom pre-validation and checking the user is passing in a password.
userSchema.pre('validate', function (next) {
    //ensure the user is parsing through a password
    //check the value of the passwords are the same
    if (
      this.isModified('password') &&
      this.password !== this._passwordConfirmation
    ) {
      this.invalidate('passwordConfirmation', 'Passwords do not match')
    }
    next()
})

//Custom pre save
//Make sure that te user is passing a password.
//Hashing the plain text password using the bcrypt method.
userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
})


//Add some methods to the userSchema wherever we have imported the model
// thismethod checks a plain text password input in the req.body
userSchema.methods.validatePassword = function (password) {
    //return a boolean based on whether the plain text password matches the hash.
    return bcrypt.compareSync(password, this.password)
}

//virtual field for user profiles, recipes created by user
userSchema.virtual('createdRecipes', {
  ref: 'Recipe',
  localField: '_id',
  foreignField: 'owner'
})

export default mongoose.model('User', userSchema)
