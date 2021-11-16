import React, { useState } from 'react'
import Nav from './Nav.js'
import SearchBar from './SearchBar.js'
import OffcanvasNav from './Offcanvas.js'
import ModalRegister from './ModalRegister.js'
import ModalLogin from './ModalLogin.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from 'react-router-dom'
import { removeToken } from '../helpers/auth.js'
import Button from 'react-bootstrap/Button'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  const [showLogin, setShowLogin] = useState(false)
  const handleClose = () => setShowLogin(false)
  const handleShow = () => setShowLogin(true)

  const [showRegister, setShowRegister] = useState(false)
  const handleCloseRegister = () => setShowRegister(false)
  const handleShowRegister = () => setShowRegister(true)

  const [showSearchBar, setShowSearchBar] = useState(false)
  const handleClick = () => setShowSearchBar(true)

  const handleLogout = () => {
    removeToken()
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <>
      <header>
        <div className='header-container'>
          <div className='nav-container'>
            <OffcanvasNav
              handleShowLogin={handleShow}
              handleShowRegister={handleShowRegister}
            />
            <Nav />
          </div>
          <div className='logo-container'>
            <h1>aioli</h1>
          </div>
          <div className='login-container'>
            <div className='auth-buttons-container'>
              {isLoggedIn ? (
                <>
                  <Link to='/account'>
                    <Button className='auth-button account'>Account</Button>
                  </Link>
                  <Button className='auth-button' onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    className='auth-button login'
                    variant='primary'
                    onClick={handleShow}
                  >
                    Login
                  </Button>
                  <ModalLogin
                    showLogin={showLogin}
                    handleClose={handleClose}
                    setIsLoggedIn={setIsLoggedIn}
                    handleShowRegister={handleShowRegister}
                  />

                  <Button className='auth-button' onClick={handleShowRegister}>
                    {' '}
                    Register
                  </Button>
                  <ModalRegister
                    showRegister={showRegister}
                    handleCloseRegister={handleCloseRegister}
                    setIsLoggedIn={setIsLoggedIn}
                    handleShow={handleShow}
                  />
                </>
              )}
            </div>
            <div className='search-container'>
              {showSearchBar ? (
                <SearchBar />
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
