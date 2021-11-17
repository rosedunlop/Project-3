//Get user profile
import User from '../models/user.js'

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
      .populate('createdRecipes')
      .populate('likedRecipes')
    if (!user) throw new Error()
    console.log(user)
    return res.status(200).json(user)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Not Found' })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const user = await User.findById(id)
    console.log('user to delete --> ', user)
    if (!user._id.equals(req.currentUser._id)) throw new Error()
    await user.remove()
    const users = await user.find()
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({message: "Not found"})
  }
}
