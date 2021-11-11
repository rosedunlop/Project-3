import React, { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import About from './pages/About.js'

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
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
