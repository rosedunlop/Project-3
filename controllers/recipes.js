import Recipe from '../models/recipe.js'

//GET ALL
export const getAllRecipes = async (_req, res) => {
  const recipes = await Recipe.find()
  console.log('Recipes', recipes)
  return res.status(200).json(recipes)
}

//GET SINGLE RECIPE
export const getSingleRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const singleRecipe = await Recipe.findById(id)
      .populate('owner')
      .populate('comments.owner')
      .populate('likes.owner')
    return res.status(202).json(singleRecipe)
  } catch (err) {
    return res.status(404).json({ message: 'Recipe Not Found' })
  }
}

//POST REQUEST
export const addRecipe = async (req, res) => {
  try {
    console.log(req.body)
    const newRecipe = { ...req.body, owner: req.currentUser._id }
    const recipeToAdd = await Recipe.create(newRecipe)
    console.log(recipeToAdd)
    return res.status(201).json(recipeToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

//UPDATE BY ID
export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    Object.assign(recipe, req.body)
    await recipe.save({ validateModifiedOnly: true })
    console.log(recipe)
    return res.status(202).json(recipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Recipe Not Found' })
  }
}

// COMMENTS
export const addAComment = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error()
    const newComment = { ...req.body, owner: req.currentUser._id }
    console.log('newComment ->', newComment)
    recipe.comments.push(newComment)
    await recipe.save({ validateModifiedOnly: true })
    return res.status(200).json(recipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'something went wrong' })
  }
}

//DELETE A COMMENT
export const deleteAComment = async (req, res) => {
  try {
    const { id, commentId } = req.params
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error()
    const commentToDelete = recipe.comments.id(commentId)
    if (!commentToDelete) throw new Error()
    if (!commentToDelete.owner.equals(req.currentUser._id)) throw new Error()
    await commentToDelete.remove()
    await recipe.save({ validateModifiedOnly: true })
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'something went wrong' })
  }
}

//DELETE RECIPE
export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const recipeToDelete = await Recipe.findById(id)
    if (!recipeToDelete.owner.equals(req.currentUser._id)) throw new Error()
    await recipeToDelete.remove()
    const recipes = await Recipe.find()
    return res.status(202).json(recipes)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Recipe Not Found' })
  }
}

// LIKE A RECIPE
export const likeRecipe = async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error()
    const newLike = { ...req.body, owner: req.currentUser._id }
    console.log('new like ->', newLike)
    recipe.likes.push(newLike)
    await recipe.save({ validateModifiedOnly: true })
    return res.status(200).json(recipe)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'Something went wrong' })
  }
}

// UNLIKE RECIPE
// export const unlikeRecipe = async (req, res) => {
//   try {
//     const { id } = req.params
//     const recipe = await Recipe.findById(id)
//     if (!recipe) throw new Error()
//     const likeToRemove = recipe.likes.findOne({ owner: req.currentUser._id })
//     if (!likeToRemove) throw new Error()
//     if (!likeToRemove.owner.equals(req.currentUser._id)) throw new Error()
//     await likeToRemove.remove()
//     await recipe.save({ validateModifiedOnly: true })
//     return res.sendStatus(204)
//   } catch (err) {
//     console.log(err)
//     return res.status(404).json({ message: 'like not found' })
//   }
// }

export const unlikeRecipe = async (req, res) => {
  try {
    const { id, likeId } = req.params
    const recipe = await Recipe.findById(id)
    if (!recipe) throw new Error()
    const likeToRemove = recipe.likes.id(likeId)
    if (!likeToRemove) throw new Error()
    if (!likeToRemove.owner.equals(req.currentUser._id)) throw new Error()
    await likeToRemove.remove()
    await recipe.save({ validateModifiedOnly: true })
    return res.sendStatus(204)
  } catch (err) {
    console.log(err)
    return res.status(404).json({ message: 'like not found' })
  }
}
