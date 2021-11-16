import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { FloatingLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useParams } from 'react-router'
import { getToken } from '../helpers/auth.js'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router'

const AddComment = ({ starRating, setStarRating, hover, setHover }) => {
     const { id } = useParams()
     const [text, setText] = useState('')
     const [rating, setRating] = useState('')
     const [isError, setIsError] = useState(false)
     const navigate = useNavigate()
     

     const handleCommentSubmit = async (event) => {
       event.preventDefault()
       const data = {
        text,
        rating
      }
      
      const config = {
        method: 'post',
        url: `/api/recipes/${id}/comments`,
        headers: { 
          'Authorization': `Bearer ${getToken()}`, 
          'Content-Type': 'application/json'
        },
        data: data
      }
      
      try {

        const response = await axios(config)
        navigate(`/recipes/${response.data._id}`)
      
          
      } catch (err) {
          console.log(err)
          setIsError(true)       
      }

     }

     const handleTextChange = (event) => {
         setText(event.target.value)
     }

     const handleRatingChange = (event) => {
         setRating(event.target.value)
     }

    return (
      <div className="comment-form">
        <h4>Post a Comment</h4>
        <Form onSubmit={handleCommentSubmit}> 
        <div className='star-form'>
          <p className='rating-para'>Rating:</p>
          {[ ...Array(5)].map((star, i) => {
            const ratingValue = i + 1
            return (
              <label key={star} >
                <input 
                type="radio" 
                name='rating' 
                value={ratingValue} 
                onClick={() => setStarRating(ratingValue)}
                onChange={handleRatingChange}
                />
                <FaStar color={ratingValue <= (hover || starRating) ? '#ffc107' : '#e4e5e9'} size={20}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                /> 
                </label>     
              )         
          })}
        </div>
        <FloatingLabel controlId="floatingTextarea2" label="Comment">
           <Form.Control
             className='comment'
             as="textarea"
             placeholder="Leave a comment here"
             value={text}
             onChange={handleTextChange}
            />
        </FloatingLabel>
        {isError ? (
            <div className="comment-error">
                <p>Something went wrong. You need to login to post a comment.</p>
            </div>
        ) : (
            <></>
        )}
        <Button type='submit'>Post</Button>
        </Form>
      </div>
    )
}

export default AddComment
