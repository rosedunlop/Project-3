import React from 'react'
import { Form } from 'react-bootstrap'
import AddImg from './FileImg'
import handleFormChange from '../../pages/AddRecipeNew'

const OtherForms = () => {

    return (
        <div className='top-forms'>
          <div className='other-forms'>
            <div className='left-forms'>
              <Form.Group className="mb-3" controlId="recipeTitle">
                <Form.Label>Recipe Title</Form.Label>
                < Form.Control type="text" placeholder="e.g. aioli" onChange={handleFormChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeTime">
                <Form.Label>Time to cook (in minutes) </Form.Label>
                <Form.Control type="number" placeholder="e.g. 40" onChange={handleFormChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeServings">
                <Form.Label>Number of servings </Form.Label>
                <Form.Control type="number" placeholder="e.g. 3" onChange={handleFormChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeKeywords">
                <Form.Label>Keywords</Form.Label>
                <Form.Control type="string" placeholder="e.g. One-pot, Indian, Quick" onChange={handleFormChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeTips">
                <Form.Label>Top Tips</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleFormChange}/>
              </Form.Group>
            </div> 

            <div className='right-forms'>

              <Form.Group className="mb-3" controlId="recipeDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleFormChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeAuthor">
                <Form.Label>Original Author</Form.Label>
                <Form.Control type="string" placeholder="e.g. Gordon Ramsey" onChange={handleFormChange} />
              </Form.Group>

              <AddImg/>
            </div>

      </div>
    
      <div className='difficulty'>
            <Form.Label>Difficulty</Form.Label>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Easy"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={handleFormChange}
                    />
                    <Form.Check
                        inline
                        label="Medium"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={handleFormChange}
                    />
                    <Form.Check
                        inline
                        label="Hard"
                        name="group1"
                        type={type}
                        id={`inline-${type}-3`}
                        onChange={handleFormChange}
                    />
                </div>
            ))}
        </div>
        </div>
    )
}
export default OtherForms