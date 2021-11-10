import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'
import Recipe from '../models/recipe.js'
import recipes from './data/recipes.js'
import User from '../models/user.js'
import userData from './data/users.js'

const seedDatabase = async () => {
    try {
        //Connect to the database
        await mongoose.connect(dbURI)
        console.log('🍕 Database connected')

        //Drop the database
        await mongoose.connection.db.dropDatabase()
        console.log('🦴 DB Dropped')

        //Add the user data into the db
        const users = await User.create(userData)
        console.log('Users added to db', users.length)
        console.log('users', users)

        //Add owner to each predator, so each one is created with an owner attached
        const recipeOwners = recipes.map((recipe) => {
        recipe.owner = users[0]._id
        return recipe
        })

        //Seed that database with data we import
        const recipesAdded = await Recipe.create(recipeOwners)
        console.log(recipesAdded.length)

        //Close the connection to the db
        await mongoose.connection.close()
        console.log('Bye')

    } catch (err) {
        console.log(err)
        //Close the connection
        await mongoose.connection.close()
        console.log('Error. Database connection closed')
    }
}
seedDatabase()