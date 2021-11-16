import React, { useState } from 'react'
import Comments from './Comments.js'
import AddComment from './AddComment.js'

const SingleRecipe = ({ title, image, description, method, ingredients, keywords, time, servings, tips, difficulty, author, comments, averageRating }) => {
  const [starRating, setStarRating] = useState(null)
  const [hover, setHover] = useState(null)
  
  return (
    <>
    
    <div className='top-half'>
      
      <img src={image} alt=""/>
      <div className='info-div'>
        <h2>{title}</h2>
        <p>{`Rating: ${averageRating}`}</p>
        <p>{`Cook: ${time} minutes`}</p>
        <p>{`Number of servings: ${servings}`}</p>
        <p>{`Difficulty: ${difficulty}`}</p>
        <p>{`Original author: ${author}`}</p>
        <p>{keywords}</p>
        <p>{`"${description}"`}</p>
      </div>
      
      </div>
      
      <div className='meth-ing'> 
      <div className='line-break' id='ingredients'> 
      <h3> Ingredients </h3>
          {ingredients.map(str => {
            return (`
              ${str}
            `)
          })}
        </div>
        <div className='line-break' id='method'> 
        <h3> Method </h3>
          {method.map(str => {
            return (`
              ${str}
            `)
          })}
        </div>
      </div>
      <p>{`Top tips: ${tips}`}</p>
      <div className="comments-container">
        <AddComment starRating={starRating} setStarRating={setStarRating} hover={hover} setHover={setHover} />
        <Comments comments={comments} averageRating={averageRating} />
      </div>
    </>
  )
}

export default SingleRecipe