import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

//POST REGISTER
export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    return res.status(202).json({ message: `Welcome to aioli ${newUser.username}` })
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

//POST LOGIN
//Logs in a user from their username and password
export const loginUser = async (req, res) => {
  try {
    const userToLogin = await User.findOne({ username: req.body.username })
    console.log('USER = ', userToLogin)
    //Check to see if passwords matches the hashed password
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
      throw new Error()
    }
    //Send a token to the user
    const token = jwt.sign({ sub: userToLogin._id }, secret, {
      expiresIn: '7 days',
    })
    return res
      .status(200)
      .json({ message: `Welcome back ${userToLogin.username}`, token: token })
  } catch (err) {
    console.log(err)
    return res.status(422).json({ message: 'Unauthorised' })
  }
}