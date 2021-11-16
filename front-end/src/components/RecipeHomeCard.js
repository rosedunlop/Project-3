import React from 'react'
import { Link } from 'react-router-dom'

const RecipeHomeCard = ({ image, title, time, id }) => {
  return (
    <>
      <img src={image} alt='' />
      <h4 className='heading-four'>
        <Link to={`/recipes/${id}`}>{title}</Link>
      </h4>
      <div className='flex-container'>
        <p className='para'>{`Cook: ${time} minutes`}</p>
        <button className='second-button'>+</button>
      </div>
    </>
  )
}

export default RecipeHomeCard
