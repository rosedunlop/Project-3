import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/recipes')
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <h1> Hello World</h1>
  )
}

export default App