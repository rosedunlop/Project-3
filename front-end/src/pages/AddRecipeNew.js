import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
//import { getAxiosRequestConfig } from '../helpers/api'
import MethodForm from '../components/AddRecipe/Method'
import IngredientsForm from '../components/AddRecipe/Ingredients'
import OtherForms from '../components/AddRecipe/OtherInputs'

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
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const history = useHistory()

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const config = {
      method: 'post',
      url: '/api/recipes/new',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }

    try {
      const response = await axios(config).catch(handleError)

      console.log(response.data)
      setIsError(false)
      history.push(`/recipes/${response.data._id}`)
    } catch (err) { 
        console.log(err)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  const formInputProps = { data, errorInfo, handleFormChange }


    return (
        <section>
            <h1>Add your own recipe</h1>
            <form onSubmit={handleSubmit}>
              <div className='top-div'>
              <OtherForms />
              </div>
              <div className='bottom-div'>
              <form className="bottom-form">
              <IngredientsForm formInputProps={formInputProps}/>
              <MethodForm/>
              {isError ? (
              <div className='error'>
              <p>Error. Please try again.</p>
              </div>
              ) : (
              <></>
              )}
              </form>
              </div>
              <div>
                <input type='submit' value='Add Recipe' />
              </div>
          </form>
        </section>
    )
}
export default AddRecipeNew

