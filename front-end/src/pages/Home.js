import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeHomeCard from '../components/RecipeHomeCard'

const Home = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const { data } = await axios.get('/api/recipes') 
        setRecipes(data)
      } catch (err) {
        console.log(err)         
      }
    }
    getAllRecipes()
  }, [])
  
  console.log(recipes)


  return (
    <>
      <div className='main-recipe-container'>
        <div className='description'>
          <h1>{recipes[2].title}</h1>
          <p>{recipes[2].description}</p>
        </div>
        <div className='image'>
          <img src={recipes[2].image} alt="recipe-image"/>
        </div>
      </div>
      <div className="top-recipes">
        <h4>This Weeks Top Recipes</h4>
        <div className="recipe-card">
          <RecipeHomeCard />  
        </div>
      </div>     
    </>
  )
}

export default Home
