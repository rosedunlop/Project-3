import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import About from './pages/About.js'
import RecipeList from './pages/RecipeList'
import RecipeShow from './pages/OneRecipe.js'
//import AddRecipe from './pages/AddRecipe.js'
import AddRecipeNew from './pages/AddRecipeNew.js'
import { getToken } from './helpers/auth.js'
import AddRecipe from './pages/AddRecipe.js'
import SearchResults from './pages/SearchResults.js'
import Account from './pages/Account.js'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/recipes/new' component={AddRecipeNew} />
          <Route path='/account' component={Account} />
          <Route path='/recipes/new' component={AddRecipe} />
          <Route path='/recipes/:id' component={RecipeShow} />
          <Route path='/recipes' component={RecipeList} />
          <Route path='/search-results' component={SearchResults} />
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
