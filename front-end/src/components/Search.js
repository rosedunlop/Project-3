import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
// import SearchResults from '../pages/SearchResults'
import RecipeHomeCard from './RecipeHomeCard'

const Search = () => {
  // const { search } = window.location
  // const query = new URLSearchParams(search).get('search')
  // const [clicked, setClicked] = useState(false)
  const [submit, setSubmit] = useState(false)

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

  const handleSearch = (event) => {
    const query = event.target.value
    console.log(query)
  }

  const handleSubmit = () => setSubmit(true)

  return (
    <form>
      <input
        type='text'
        id='header-search'
        placeholder='search recipes'
        name='search'
        onChange={handleSearch}
      ></input>
      <button type='submit' value='submit' onSubmit={handleSubmit}>
        search
      </button>
      {submit ? (
        <>
          <div className='recipeList'>
            {recipes.map((recipe) => (
              <div key={recipe._id} className='oneRecipe'>
                <RecipeHomeCard {...recipe} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </form>
  )
}

export default Search
