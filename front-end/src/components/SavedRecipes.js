import React from 'react'
import RecipeHomeCard from './RecipeHomeCard'
import { Link } from 'react-router-dom'

const SavedRecipes = ({ recipes }) => {
  return (
    <div>
      {recipes.length ? (
        recipes.map((recipe) => (
          <div key={recipe._id} className='oneRecipe'>
            <RecipeHomeCard {...recipe} />
          </div>
        ))
      ) : (
        <>
          <h3>You have not saved any recipes yet!</h3>
          <Link to='/recipes'>Browse all recipes here.</Link>
        </>
      )}
    </div>
  )
}

export default SavedRecipes
