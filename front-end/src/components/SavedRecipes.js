import React from 'react'
import SavedRecipeCard from './SavedRecipeCard'
import { Link } from 'react-router-dom'

const SavedRecipes = ({ userId, recipes }) => {
  return (
    <>
      <h2 className='account-header'>Your saved recipes</h2>
      <div className='recipeList'>
        {recipes ? (
          recipes.map((recipe) => (
            <div key={recipe._id} className='oneRecipe'>
              <SavedRecipeCard {...recipe} userId={userId} />
            </div>
          ))
        ) : (
          <>
            <h3>You have not saved any recipes yet!</h3>
            <Link to='/recipes'>Browse all recipes here.</Link>
          </>
        )}
      </div>
    </>
  )
}

export default SavedRecipes
