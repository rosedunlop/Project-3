import RecipeHomeCard from '../components/RecipeHomeCard'
import { Spinner } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
    // recipes.forEach((recipe) => {
    //   recipe.title =
    //     recipe.title.charAt(0).toUpperCase() +
    //     recipe.title.slice(1).toLowerCase()
    //   recipe.keywords = recipe.keywords.join(', ').toLowerCase()
    // })

    return (
      <>
      <section className='all-recipes'>
        <div className='heading'>
          <h2>Recipes</h2>
          <p>Browse our favourite recipes...</p>
          <form className='search-allrecipes'>
            <input
              type='text'
              className='searchInput'
              placeholder='search recipes...'
            ></input>
            <FontAwesomeIcon
              icon={faArrowRight}
              className='arrow-icon'
              type='submit'
            />
          </form>
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
        </section>
      </>
    )
  }
}

export default RecipeList
