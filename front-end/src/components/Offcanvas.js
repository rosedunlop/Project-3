import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Squash as Hamburger } from 'hamburger-react'
import Button from 'react-bootstrap/Button'

const OffcanvasNav = ({ handleShowLogin, handleShowRegister }) => {
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
              <Button className="button-one" variant="primary" onClick={handleShowLogin}>Login</Button>
              <Button className="button-two" variant="primary" onClick={handleShowRegister}>Create an account</Button>     
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to='/recipes'>Recipes</Link>
              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffcanvasNav
