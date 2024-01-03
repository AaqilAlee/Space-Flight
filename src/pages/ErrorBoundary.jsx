import React from 'react'
import  ErrorImg from '../asset/img/error.jpg'

const ErrorBoundary = () => {
  return (
    <>
       <div className='d-flex justify-content-center align-items-center'>
          <img src={ErrorImg} alt='' className='img-fluid error_img' />
      </div>
    </>
  )
}

export default ErrorBoundary