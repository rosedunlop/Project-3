import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { saveRecipe } from '../helpers/api'

const RecipeHomeCard = ({ image, title, time, id }) => {
  // const { id } = useParams()
  const [saved, setSave] = useState(false)

  const handleClick = (event) => {
    console.log('Clicked recipe -->', id)
    event.preventDefault()
    saveRecipe(id)
    setSave(true)
  }

  const handleUnsave = (event) => {
    console.log('Unliked recipe --> ', id)
    event.preventDefault()

    setSave(false)
  }

  return (
    <>
      <img src={image} alt='' />
      <h4 className='heading-four'>
        <Link to={`/recipes/${id}`}>{title}</Link>
      </h4>
      <div className='flex-container'>
        <p className='para'>{`Cook: ${time} minutes`}</p>
        {!saved ? (
          <button className='second-button' onClick={handleClick}>
            +
          </button>
        ) : (
          <button className='clicked-button' onClick={handleUnsave}>
            +
          </button>
        )}
      </div>
    </>
  )
}

export default RecipeHomeCard
