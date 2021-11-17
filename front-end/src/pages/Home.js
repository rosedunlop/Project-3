import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeHomeCard from '../components/RecipeHomeCard.js'
import Carousel  from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'


const Home = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getAllRecipes = async () => {
      try {
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
