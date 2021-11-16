import React from 'react'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'

const AddComment = () => {
     // post to add a comment
     // Form below which the user fills out and on submit adds a comment.
    

    return (
      <div>
        <FloatingLabel controlId="floatingSelect" label="Rating">
        <Form.Select aria-label="Floating label select example" style={{ width: '25vw' }}>
          <option></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
</FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Comment">
           <Form.Control
             as="textarea"
             placeholder="Leave a comment here"
             style={{ height: '100px', width: '50vw' }}
            />
        </FloatingLabel>
      </div>
    )
}

export default AddComment
