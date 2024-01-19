import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found'>
        <img src="./error_404.gif" alt="Error 404: Not Found" />
        <Link to='/'><button>Back to Home</button></Link>
    s</div>
    
  )
}

export default NotFound