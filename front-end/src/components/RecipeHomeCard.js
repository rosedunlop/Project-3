import React from 'react'

const RecipeHomeCard = ({ image, title, time }) => {
  return (
    <>
      <img src={image} alt=""/>
      <h4>{title}</h4>
      <p>{`Cook: ${time} minutes`}</p>
      <button>+</button>
    </>
  )
}

export default RecipeHomeCard
