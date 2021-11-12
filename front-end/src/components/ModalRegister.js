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
                {/* <Modal.Text>Create an account with us to save and post recipes and more.</Modal.Text> */}
              </Modal.Header>
              <Modal.Body>
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

export default ModalRegister
