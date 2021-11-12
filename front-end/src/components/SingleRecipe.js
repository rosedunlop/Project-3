import React from 'react'

const SingleRecipe = ({ title, image, description, method, ingredients, keywords, time, servings, tips, difficulty, author }) => {
  return (
    <>
    
    <div className='top-half'>
      
      <img src={image} alt=""/>
      <div className='info-div'>
        <h2>{title}</h2>
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
          {ingredients.map(str => {
            return (`
              ${str}
            `)
          })}
        </div>
        <div className='line-break' id='method'> 
          {method.map(str => {
            return (`
              ${str}
            `)
          })}
        </div>
        
      </div>
      <p>{`Top tips: ${tips}`}</p>
    </>
  )
}

export default SingleRecipe