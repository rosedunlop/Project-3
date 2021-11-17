import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeHomeCard from '../components/RecipeHomeCard.js'
import Carousel  from 'react-bootstrap/Carousel'
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
        <Carousel className="carousel">
        <Carousel.Item className="item">
        <div className="container">  
        <div className="img">
         <img
          className="first-image"
          src={recipes[2].image}
          alt="First slide"
         />
         </div>
        <div className="caption">
          <h1>{recipes[2].title}</h1>
          <p>{recipes[2].description}</p>
          <div className="link">
         <Link to={`/recipes/${recipes[2]._id}`}>View recipe</Link>
          <button className='button'>+</button>
         </div>
        </div>
        </div>
        </Carousel.Item>
        <Carousel.Item className="item">
         <div className='container'> 
         <div className="img"> 
         <img
          className="first-image"
          src={recipes[4].image}
          alt="Second slide"
        />
        </div>
       <div className="caption">
         <h1>{recipes[4].title}</h1>
         <p>{recipes[4].description}</p>
         <div className="link">
         <Link to={`/recipes/${recipes[4]._id}`}>View recipe</Link>
         <button className='button'>+</button>
         </div>
       </div>
       </div> 
       </Carousel.Item>
       <Carousel.Item className="item">
         <div className="container">
         <div className="img">
          <img
           className="first-image"
           src={recipes[10].image}
           alt="Third slide"
          />
         </div> 
        <div className="caption">
           <h1>{recipes[10].title}</h1>
           <p>{recipes[10].description}</p>
           <div className="link">
           <Link to={`/recipes/${recipes[10]._id}`}>View recipe</Link>
           <button className='button'>+</button>
          </div>
        </div>
        </div>
        </Carousel.Item>
        </Carousel>
          <div className='top-recipes'>
            <h2 className='heading-popular'>Popular Recipes</h2>
            <div className='recipeList'>
              {filteredRecipes.map((recipe) => (
                <div className='oneRecipe' key={recipe._id}>
                  <RecipeHomeCard {...recipe} />
                </div>
              ))}
            </div>
          </div>
     </>     
  )
}
}

  {/* <>
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
    </> */}
export default Home