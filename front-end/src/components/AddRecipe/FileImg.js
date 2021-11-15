import React from 'react'
import { Form } from 'react-bootstrap'

const AddImg = () => {

    return (
        <>
            <Form.Group controlId='formFile' className='mb-3'>
                <Form.Label>Add your recipe image</Form.Label>
                <Form.Control type='file' />
            </Form.Group>
        </>
    )
}
export default AddImg