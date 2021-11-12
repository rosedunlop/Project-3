import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModalLogin = ({ showLogin, handleClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    console.log(email)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    console.log(password)
  }

    return (
        <>
           <Modal dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title" centered show={showLogin} onHide={handleClose} animation={false} className="modal-container">
              <Modal.Header closeButton>
                <Modal.Title className="modal-title">Log in to your aioli account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                  </Form.Group> 
                  <Button className="login-button" variant="primary" type="submit">Login</Button>   
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <label>Not a member yet?</label>
                <Button className="not-member-button" variant="secondary">Join aioli</Button>
              </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalLogin
