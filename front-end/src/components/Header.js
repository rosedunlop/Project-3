import React from 'react'
import Nav from './Nav.js'
import Search from './Search.js'
import OffcanvasNav from './Offcanvas.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const handleClick = () => setShowSearchBar(true)

  return (
    <>
      <header>
        <div className='header-container'>
          <div className='nav-container'>
            <OffcanvasNav />
            <Nav />
          </div>
          <div className='logo-container'>
            <h1>aioli</h1>
          </div>
          <div className='login-container'>
            <div className='auth-buttons-container'>
              <button className='auth-button login'>Login</button>
              <button className='auth-button'> Register</button>
            </div>
            <div className='search-container'>
              {showSearchBar ? (
                <Search />
              ) : (
                <FontAwesomeIcon
                  icon={faSearch}
                  className='search-icon'
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
