import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import About from './pages/About.js'
import RecipeList from './pages/RecipeList'
import RecipeShow from './pages/OneRecipe.js'
import AddRecipeNew from './pages/AddRecipeNew.js'
import { getToken } from './helpers/auth.js'
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
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/recipes/new' element={<AddRecipeNew />} />
          <Route path='/account' element={<Account />} />
          <Route path='/recipes/:id' element={<RecipeShow />} />
          <Route path='/recipes' element={<RecipeList />} />
          <Route path='/search-results' element={<SearchResults />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
