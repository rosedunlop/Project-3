import React from 'react'

const RecipeHomeCard = ({ image, title, time }) => {
  return (
    <>
      <img src={image} alt=""/>
      <h4 className="heading-four">{title}</h4>
      <div className="flex-container">
      <p className="para">{`Cook: ${time} minutes`}</p>
      <button className="second-button">+</button>
      </div>
    </>
  )
}

export default RecipeHomeCard
