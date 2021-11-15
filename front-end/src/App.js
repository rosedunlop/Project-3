import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import About from './pages/About.js'
import RecipeList from './pages/RecipeList'
import RecipeShow from './pages/OneRecipe.js'
import AddRecipe from './pages/AddRecipe.js'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/recipes/new' component={AddRecipe} />
          <Route path='/recipes/:id' component={RecipeShow} />
          <Route path='/recipes' component={RecipeList} />
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
