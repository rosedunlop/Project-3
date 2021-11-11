import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import RecipeHomeCard from '../components/RecipeHomeCard.js'

const Home = () => {
  const [recipes, setRecipes] = useState([])
  console.log('test')

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        console.log('test')
        const { data } = await axios.get('/api/recipes')
        console.log(data)
        setRecipes(data)
      } catch (err) {
        console.log(err)
      }
    }
    getAllRecipes()
  }, [])

  const filteredRecipes = recipes.slice(10, 16)
  console.log(filteredRecipes)

  return (
    <>
      {recipes.length && (
        <>
          <div className='main-recipe-container'>
            <div className='description'>
              <h1>{recipes[2].title}</h1>
              <p>{recipes[2].description}</p>
              <button className='button'>+</button>
            </div>
            <div className='image'>
              <img src={recipes[2].image} alt='recipe-image' />
            </div>
          </div>
          <div className='top-recipes'>
            <h4 className='heading-recipe'>This Weeks Top Recipes</h4>
            <div className='recipe-card'>
              {filteredRecipes.map((recipe) => (
                <div className='card' key={recipe._id}>
                  <RecipeHomeCard {...recipe} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Home
