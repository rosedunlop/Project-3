import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeHomeCard from '../components/RecipeHomeCard.js'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  const [recipes, setRecipes] = useState([])
  // const [recipe, setRecipe] = useState(null)
  // const [title, setTitle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const { data } = await axios.get('/api/recipes')
        console.log(data)
        setRecipes(data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getAllRecipes()
  }, [])

  const filteredRecipes = recipes.slice(10, 16)
  console.log(filteredRecipes)

  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]
  console.log('Look here!', randomRecipe)

  if (isLoading) {
    return (
      <>
        <div className='loading-container'>
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      </>
    )
  } else if (!isLoading) {
    const titleStr =
      randomRecipe.title.charAt(0).toUpperCase() +
      randomRecipe.title.slice(1).toLowerCase()

    const titleArr = titleStr.split(' ')

    return (
      <>
        <div className='main-recipe-container'>
          <div className='description'>
            <h1>
              <Link to={`/recipes/${randomRecipe._id}`}>
                {titleArr.slice(0, -2).join(' ')}
                <br />
                <span> {titleArr.slice(-2).join(' ')}</span>
              </Link>
            </h1>
            <p>{randomRecipe.description}</p>
          </div>
          <div className='image'>
            <img src={randomRecipe.image} alt='recipe-image' />
          </div>
        </div>
        <h2 className='heading-popular'>Popular recipes</h2>
        <div className='recipeList'>
          {filteredRecipes.map((recipe) => (
            <div className='oneRecipe' key={recipe._id}>
              <RecipeHomeCard {...recipe} />
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Home
