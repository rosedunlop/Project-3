import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModalRegister = ({ showRegister, handleCloseRegister }) => {

    return (
        <>
           <Modal dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title" centered show={showRegister} onHide={handleCloseRegister} animation={false} className="modal-container">
              <Modal.Header closeButton>
                <Modal.Title className="modal-title">Register an aioli account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="register-para">
                <p>Create an account with aioli to save recipes, post recipes to your profile and more.</p>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="username" placeholder="Enter username"/>
                  </Form.Group>  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Confirmation Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm password"/>
                  </Form.Group> 
                  <Button className="register-button" variant="primary" type="submit">Register</Button>   
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <label>Already a member?</label>
                <Button className="not-member-button" variant="secondary">Login</Button>
              </Modal.Footer>
            </Modal> 
        </>
    )
}

export default ModalRegister
