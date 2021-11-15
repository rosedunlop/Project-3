import React, { useState } from 'react'
import Nav from './Nav.js'
import Search from './Search.js'
import OffcanvasNav from './Offcanvas.js'
import Button from 'react-bootstrap/Button'
import ModalRegister from './ModalRegister.js'
import ModalLogin from './ModalLogin.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import { getToken, removeToken } from '../helpers/auth.js'



const Header = () => {
  const history = useHistory()
  
  const [showLogin, setShowLogin] = useState(false)

  const handleClose = () => setShowLogin(false)
  const handleShow = () => setShowLogin(true)

  const [showRegister, setShowRegister] = useState(false)

  const handleCloseRegister = () => setShowRegister(false)
  const handleShowRegister = () => setShowRegister(true)

  const [showSearchBar, setShowSearchBar] = useState(false)
  const handleClick = () => setShowSearchBar(true)

  const isUserLoggedIn = () => {
    if (getToken()) {
      return true
    }
    return false
  }

  const handleLogout = () => {
    removeToken()
    history.push('/')
    // location.reload()
  }

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
              {!isUserLoggedIn() ? (
                <>
                <Button className='auth-button login' variant="primary" onClick={handleShow}>Login</Button>
                <ModalLogin showLogin={showLogin} handleClose={handleClose}/>
                </>
              ) : (
                <>
                 <Button className='auth-button' onClick={handleLogout}>Logout</Button>
                </>
              )
            }

            <Button className='auth-button' onClick={handleShowRegister}> Register</Button>
            <ModalRegister showRegister={showRegister} handleCloseRegister={handleCloseRegister} />   
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
