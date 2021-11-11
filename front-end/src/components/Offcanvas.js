import React from 'react'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
// import Button from './Button.js'
import { Squash as Hamburger } from 'hamburger-react'
// import Button from 'react-bootstrap/Button'

const OffcanvasNav = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Hamburger toggled={show} toggle={handleShow} />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffcanvasNav
