import axios from 'axios'
import { getToken } from './auth'

//Saving recipe to account
export const saveRecipe = async (id) => {
  const config = {
    method: 'post',
    url: `/api/recipes/${id}/likes`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }
  const response = await axios(config)
  return response.data
}

//Remove from saved recipes
export const unsaveRecipe = async (id, likeId) => {
  const config = {
    method: 'delete',
    url: `/api/recipes/${id}/likes/${likeId}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }
  const response = await axios(config)
  return response.data
}

//Getting user details
export const fetchUser = async () => {
  const config = {
    method: 'get',
    url: 'api/account',
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }
  const response = await axios(config)
  return response.data
}

export const deleteUser = async (id) => {
  const config = {
    method: 'delete',
    url: `api/account/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }
  const response = await axios(config)
  return response.data
}

//Getting all the recipes
export const fetchRecipes = async () => {
  const config = {
    method: 'get',
    url: '/api/recipes',
    headers: {}
  }

  const response = await axios(config)
  return response.data
}

//Getting a single recipe
export const fetchRecipe = async (id) => {
  const config = {
    method: 'get',
    url: `/api/recipes/${id}`,
    headers: {}
  }

  const response = await axios(config)
  return response.data
}

//Delete Recipe
export const deleteRecipe = async (id) => {
  const config = {
    method: 'delete',
    url: `/recipes/${id}`,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }
  const response = await axios(config)
  return response.data
}

//Login
export const login = async (data) => {
  return makeAxiosRequest('/login', data)
}

//Register
export const register = (data) => {
  return makeAxiosRequest('/register', data)
}

//Making a request
const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data)

  const response = await axios(config)
  return response.data
}

//Get axios request
export const getAxiosRequestConfig = (requestUrl, data, method = 'post') => {
  // Config object – tells us everything special about the request
  const config = {
    method,
    url: `/api/recipes${requestUrl}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    },
    // The "payload" or the "body" of the request: the important info we send as JSON
    data
  }
  return config
}
