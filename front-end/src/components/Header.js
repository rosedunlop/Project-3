import React from 'react'
import Nav from './Nav.js'
import Offcanvas from './Offcanvas.js'

const Header = () => {
  return (
    <div className='header-container'>
      <div>
        <Offcanvas />
      </div>
      <div className='nav-container'>
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
  )
}

export default Header
