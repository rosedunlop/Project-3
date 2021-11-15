import React, { useState } from 'react'
import Nav from './Nav.js'
import Search from './Search.js'
import OffcanvasNav from './Offcanvas.js'
import ModalRegister from './ModalRegister.js'
import ModalLogin from './ModalLogin.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = ({ searchValue, setSearchValue }) => {
  const [showLogin, setShowLogin] = useState(false)
  const handleClose = () => setShowLogin(false)
  const handleShow = () => setShowLogin(true)

  const [showRegister, setShowRegister] = useState(false)
  const handleCloseRegister = () => setShowRegister(false)
  const handleShowRegister = () => setShowRegister(true)

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
            <ModalLogin showLogin={showLogin} handleClose={handleClose} />

            <ModalRegister
              showRegister={showRegister}
              handleCloseRegister={handleCloseRegister}
            />

            <div className='auth-buttons-container'>
              <button className='auth-button login' onClick={handleShow}>
                Login
              </button>
              <button className='auth-button' onClick={handleShowRegister}>
                {' '}
                Register
              </button>
            </div>
            <div className='search-container'>
              {showSearchBar ? (
                <Search
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
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
