import React from 'react'
import Nav from './Nav.js'
import OffcanvasNav from './Offcanvas.js'

const Header = () => {
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
            <button className='auth-button login'>Login</button>
            <button className='auth-button'> Register</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
