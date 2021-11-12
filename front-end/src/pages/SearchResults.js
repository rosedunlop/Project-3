import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RecipeHomeCard from '../components/RecipeHomeCard'

const SearchResults = ({ query }) => {
  const [recipes, setRecipes] = useState(null)
  useEffect(() => {
    async function fetchRecipes() {
      const config = {
        method: 'get',
        url: '/api/recipes'
      }
      const response = await axios(config)
      setRecipes(response.data)
    }
    fetchRecipes()
  }, [])

  const filterRecipes = (recipe, query) => {
    if (!query) return recipes
    return recipes.filter((recipe) => {
      const recipeName = recipe.title.toLowerCase()
      return recipeName.includes(query)
    })
  }

  const filteredRecipes = filterRecipes(recipes, query)

  return (
    <div>
      <div className='recipeList'>
        {filteredRecipes.map((recipe) => (
          <div key={recipe._id} className='oneRecipe'>
            <RecipeHomeCard {...recipe} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResults
