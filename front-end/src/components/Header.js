import React, { useState } from 'react'
import Nav from './Nav.js'
import OffcanvasNav from './Offcanvas.js'
import Button from 'react-bootstrap/Button'
import ModalRegister from './ModalRegister.js'
import ModalLogin from './ModalLogin.js'


const Header = () => {
  
  const [showLogin, setShowLogin] = useState(false)

  const handleClose = () => setShowLogin(false)
  const handleShow = () => setShowLogin(true)

  const [showRegister, setShowRegister] = useState(false)

  const handleCloseRegister = () => setShowRegister(false)
  const handleShowRegister = () => setShowRegister(true)



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
            <Button className='auth-button login' variant="primary" onClick={handleShow}>Login</Button>
            <ModalLogin showLogin={showLogin} handleClose={handleClose}/>

            <Button className='auth-button' onClick={handleShowRegister}> Register</Button>
            <ModalRegister showRegister={showRegister} handleCloseRegister={handleCloseRegister} />

          </div>
        </div>
      </header>
    </>
  )
}

export default Header
