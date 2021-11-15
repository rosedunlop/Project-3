import axios from 'axios'
import React from 'react'
import { getAxiosRequestConfig } from '../helpers/api'
import RecipeForm from '../components/RecipeForm'
import { useState } from 'react'
import { useHistory } from 'react-router'

const AddRecipe = () => {
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
    
        const config = getAxiosRequestConfig('/recipes', data)
    
        try {
          const response = await axios(config).catch(handleError)
    
          console.log(response)
          setIsError(false)
          history.push(`/recipes/${response}`)
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
          <form onSubmit={handleSubmit}>
            <h1>Add your own recipe</h1>
            <RecipeForm formInputProps={formInputProps} />
            <div>
              <input type='submit' value='Add Recipe' />
            </div>
            {isError ? (
              <div className='error'>
                <p>Error. Please try again.</p>
              </div>
            ) : (
              <></>
            )}
          </form>
        </section>
    )
}
export default AddRecipe
