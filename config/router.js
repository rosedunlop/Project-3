import express from 'express'
import {
  addRecipe,
  deleteRecipe,
  getAllRecipes,
  getSingleRecipe,
  updateRecipe,
  addAComment,
  deleteAComment,
  likeRecipe,
  unlikeRecipe
} from '../controllers/recipes.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { getUserProfile, deleteUser } from '../controllers/users.js'

const router = express.Router()

router.route('/recipes').get(getAllRecipes).post(secureRoute, addRecipe)

router
  .route('/recipes/:id')
  .get(getSingleRecipe)
  .delete(secureRoute, deleteRecipe)
  .put(secureRoute, updateRecipe)

router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

router.route('/recipes/:id/comments').post(secureRoute, addAComment)

router
  .route('/recipes/:id/comments/:commentId')
  .delete(secureRoute, deleteAComment)

router.route('/recipes/:id/likes').post(secureRoute, likeRecipe)

router.route('/recipes/:id/likes/:likeId').delete(secureRoute, unlikeRecipe)

router.route('/account').get(secureRoute, getUserProfile)

router.route('/account/:id').delete(secureRoute, deleteUser)

export default router
