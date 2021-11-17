import React, { useState } from 'react'
import { Form } from 'react-bootstrap'




const OtherForms = ({ handleFormChange, handleChange  }) => {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [servings, setServings] = useState('')
  const [keywords, setKeywords] = useState('')
  const [tips, setTips] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [difficulty, setDifficulty] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
    console.log(title)
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value)
    console.log(time)
  }

  const handleServingsChange = (event) => {
    setServings(event.target.value)
    console.log(servings)
  }

  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value)
    console.log(keywords)
  }

  const handleTipsChange = (event) => {
    setTips(event.target.value)
    console.log(tips)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
    console.log(description)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
    console.log(author)
  }

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value)
    console.log(difficulty)
  }

    return (
        <div className='top-forms'>
          <div className='other-forms'>
            <div className='left-forms'>
              <Form.Group className="mb-3" controlId="recipeTitle">
                <Form.Label>Recipe Title</Form.Label>
                < Form.Control type="text" placeholder="e.g. aioli" value={title} onChange={handleTitleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeTime">
                <Form.Label>Time to cook (in minutes) </Form.Label>
                <Form.Control type="number" placeholder="40" value={time} onChange={handleTimeChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeServings">
                <Form.Label>Number of servings </Form.Label>
                <Form.Control type="number" placeholder="3" value={servings} onChange={handleServingsChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeKeywords">
                <Form.Label>Keywords</Form.Label>
                <Form.Control type="string" placeholder="One-pot, Indian, Quick" value={keywords} onChange={handleKeywordsChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeTips">
                <Form.Label>Top Tips</Form.Label>
                <Form.Control as="textarea" rows={3} value={tips} onChange={handleTipsChange}/>
              </Form.Group>
            </div> 

            <div className='right-forms'>

              <Form.Group className="mb-3" controlId="recipeDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={handleDescriptionChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="recipeAuthor">
                <Form.Label>Original Author</Form.Label>
                <Form.Control type="string" placeholder="e.g. Gordon Ramsey" value={author} onChange={handleAuthorChange} />
              </Form.Group>
            </div>

      </div>
    
      <div className='difficulty'>
            <Form.Label>Difficulty</Form.Label>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Easy"
                        name="difficulty"
                        type={type}
                        id={`inline-${type}-1`}
                        value="Easy"
                        onChange={handleDifficultyChange}
                    />
                    <Form.Check
                        inline
                        label="Medium"
                        name="difficulty"
                        type={type}
                        id={`inline-${type}-2`}
                        value="Medium"
                        onChange={handleDifficultyChange}
                    />
                    <Form.Check
                        inline
                        label="Hard"
                        name="difficulty"
                        type={type}
                        id={`inline-${type}-3`}
                        value="Hard"
                        onChange={handleDifficultyChange}
                    />
                </div>
            ))}
        </div>
        </div>
    )
}
export default OtherForms