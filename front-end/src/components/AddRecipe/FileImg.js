import React from 'react'
import { Form } from 'react-bootstrap'
import handleFormChange from '../../pages/AddRecipeNew'

const AddImg = () => {

    return (
        <>
            <Form.Group controlId='formFile' className='mb-3'>
                <Form.Label>Add your recipe image</Form.Label>
                <Form.Control type='file' onChange={handleFormChange}/>
            </Form.Group>
        </>
    )
}
export default AddImg