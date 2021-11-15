import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { setToken } from '../helpers/auth'

const ModalLogin = ({ showLogin, handleClose }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      username,
      password
    }

    const config = {
      method: 'post',
      url: '/api/login',
      headers: { 
      'Content-Type': 'application/json'
      },
      data: data
    }
    try {
      const response = await axios(config)
      console.log(response)

      setToken(response.data.token)
      handleClose(true)
      
    } catch (err) {
      console.error(err)
    }

  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
    console.log(username)
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
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                  </Form.Group> 
                  <Button className="login-button" variant="primary" type="submit" value="Login">Login</Button>   
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
