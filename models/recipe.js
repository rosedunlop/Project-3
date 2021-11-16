import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const likeSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
)

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxlength: 200 },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }
  },
  {
    timestamps: true
  }
)

//Creating our recipe Schema
const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  method: [{ type: String, required: true }],
  ingredients: [{ type: String, required: true }],
  keywords: [{ type: String }],
  time: { type: Number, required: true },
  servings: { type: Number, required: true },
  tips: { type: String },
  difficulty: { type: String },
  author: { type: String },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema],
  likes: [likeSchema]
})

recipeSchema.plugin(uniqueValidator)

recipeSchema.virtual('averageRating').get(function () {
  if (!this.comments.length) return 'Not rated yet'
  const sumOfRatings = this.comments.reduce((acc, comment) => {
    if (!comment.rating) return acc
    return acc + comment.rating
  }, 0)
  return (sumOfRatings / this.comments.length).toFixed(2)
})

recipeSchema.set('toJSON', { virtuals: true })
//Creating a model instance
export default mongoose.model('Recipe', recipeSchema)


