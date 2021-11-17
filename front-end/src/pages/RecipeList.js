import RecipeHomeCard from '../components/RecipeHomeCard'
import { Spinner } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'

import React from 'react'
import { fetchRecipes } from '../helpers/api'

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const loaded = () => setIsLoading(false)

  useEffect(() => {
    fetchRecipes().then(setRecipes).then(loaded)
  }, [])

  if (isLoading) {
    return (
      <>
        <div className='loading-container'>
          <h2>Loading recipes...</h2>
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      </>
    )
  } else if (!isLoading) {
    return (
      <>
        <div className='heading'>
          <h2>Recipes</h2>
          <p>Browse our favourite recipes...</p>
        </div>
        {recipes.length && (
          <>
            <div className='recipeList'>
              {recipes.map((recipe) => (
                <div key={recipe._id} className='oneRecipe'>
                  <RecipeHomeCard {...recipe} />
                </div>
              ))}
            </div>
          </>
        )}
      </>
    )
  }
}

export default RecipeList
