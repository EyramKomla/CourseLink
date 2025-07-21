import React from 'react'
import { Link } from 'react-router-dom'

function signin() {
  return (
    <div className='flex justify-center '>
        <div>signin</div>
        <Link to="/landing">Go to Landing Page</Link>
    </div>
  )
}

export default signin