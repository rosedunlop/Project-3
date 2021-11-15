import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../helpers/api'
import RecipeHomeCard from '../components/RecipeHomeCard'
import { Link } from 'react-router-dom'

const SearchResults = () => {
  const [recipes, setRecipes] = useState([])
  const { search } = window.location
  const query = new URLSearchParams(search).get('query')
  const filteredRecipes = filterRecipes(recipes, query)

  useEffect(() => {
    fetchRecipes().then(setRecipes)
  }, [])

  function filterRecipes(recipes, query) {
    if (!query) {
      return recipes
    }
    return recipes.filter((recipe) => {
      const recipeTitle = recipe.title.toLowerCase()
      return recipeTitle.includes(query)
    })
  }

  return (
    <>
      {recipes.length && (
        <>
          <div className='recipeList'>
            <h2>Search results for {query}</h2>
            {filteredRecipes.length ? (
              filteredRecipes.map((recipe) => (
                <div key={recipe._id} className='oneRecipe'>
                  <RecipeHomeCard {...recipe} />
                </div>
              ))
            ) : (
              <h3>
                Sorry, no results for your search {query}. <br />
                <Link to='/recipes'>Browse all recipes here.</Link>{' '}
              </h3>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default SearchResults
