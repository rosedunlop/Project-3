import React, { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './pages/Home.js'

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
    <Router>
      <header>
        <h1> Hello World</h1>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
