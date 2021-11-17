import axios from 'axios'
import React, { useState } from 'react'
// import { useHistory } from 'react-router'
//import { getAxiosRequestConfig } from '../helpers/api'
import MethodForm from '../components/AddRecipe/Method'
import IngredientsForm from '../components/AddRecipe/Ingredients'
import OtherForms from '../components/AddRecipe/OtherInputs'
import { getToken } from '../helpers/auth'
import { ImageUploadField } from '../components/AddRecipe/ImageUploadFields'

const AddRecipeNew = () => {
  const [data, setData] = useState({
      title: '',
      image: '',
      description: '',
      method: '',
      ingredients: '',
      keywords: '',
      time: '',
      servings: '',
      tips: '',
      difficulty: '',
      author: ''
  })

  const [isError, setIsError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const config = {
      method: 'post',
      url: '/api/recipes',
      headers: {
        Authorization: `Bearer ${getToken()}`,
        'Content-Type': 'application/json'
      },
      data
    }

    try {
      const response = await axios(config)
      console.log(response.data)
      setIsError(false)
      // history.push(`/recipes/${response.data._id}`)
    } catch (err) { 
        setIsError(true)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleChange = event => {
    console.log('event.target.checked', event.target.checked)
    const value = event.target.type === 'radio' ? event.target.checked : event.target.value
    setData({ ...data, [event.target.name]: value })
  }

  const handleImageUrl = url => {
    setData({ ...data, image: url })
  }

  //const formInputProps = { data, handleFormChange }


    return (
        <section>
            <h1>Add your own recipe</h1>
            <form onSubmit={handleSubmit}>
              <div className='top-div'>
                <OtherForms handleFormChange={handleFormChange}/>
                <ImageUploadField value={data.image} name='image' handleImageUrl={handleImageUrl}/>
              </div>
              <div className='bottom-div'>
                <div className="bottom-form">
                  <IngredientsForm handleFormChange={handleFormChange} value={data.ingredients}/>
                  <MethodForm handleFormChange={handleFormChange} value={data.method}/>
                  {isError ? (
                  <div className='error'>
                  <p>Error. Please try again.</p>
                  </div>
                  ) : (
                  <></>
                  )}
                </div>
              </div>
              <div>
                <input type='submit' value='Add Recipe' />
              </div>
          </form>
        </section>
    )
}
export default AddRecipeNew

