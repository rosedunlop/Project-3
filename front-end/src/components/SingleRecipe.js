import React from 'react'
import { Link } from 'react-router-dom'

const SingleRecipe = ({ title, image, description, method, ingredients, keywords, time, servings, tips, difficulty, author, _id }) => {
  return (
    <>
    <h2>
        <Link to={`/api/recipes/${_id}`}>
        {title}
        </Link>
    </h2>
      <img src={image} alt=""/>
      <p>{description}</p>
      <div className='info-div'>
        <p>{`Cook: ${time} minutes`}</p>
        <p>{`Number of servings: ${servings}`}</p>
        <p>{`Difficulty: ${difficulty}`}</p>
        <p>{`Original author: ${author}`}</p>
        <p>{keywords}</p>
      </div>
      <div className='meth-ing'> 
        <ul>
            <li>{method}</li>
        </ul>
        <ul>
            <li>{ingredients}</li>
        </ul>
        <p>{tips}</p>
      </div>
    </>
  )
}

export default SingleRecipe