import React from 'react'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
// import Button from './Button.js'
import { Squash as Hamburger } from 'hamburger-react'
// import Button from 'react-bootstrap/Button'

const OffcanvasNav = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => (!show ? setShow(true) : setShow(false))

  return (
    <>
      <Hamburger toggled={show} toggle={handleShow} />

      <Offcanvas var='--bs-dark' show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <ul className='offcanvas-auth'>
              <li>Login</li>
              <li>Create an account</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Recipes</li>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffcanvasNav
