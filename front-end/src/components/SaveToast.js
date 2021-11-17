import React, { useState, useEffect } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

const SaveToast = () => {
  const [show, setShow] = useState(false)

  useEffect(() => setShow(true))

  return (
    <>
      <div
        aria-live='polite'
        aria-atomic='true'
        className='bg-dark position-relative'
        style={{ minHeight: '240px' }}
      >
        <ToastContainer className='p-3' position='top-end'>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src='holder.js/20x20?text=%20'
                className='rounded me-2'
                alt=''
              />
              <strong className='me-auto'>Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Recipe saved!</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  )
}

export default SaveToast
