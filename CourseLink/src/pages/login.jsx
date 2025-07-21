import React from 'react'
import { Link } from 'react-router-dom'
import SignInPic from '../assets/male-freelancer-working-from-home-vector.jpg'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full'>
        <div className=' h-[500px] w-[860px] bg-white rounded-4xl shadow-lg flex'>
            <div className='h-full w-[50%] rounded-4xl'>
                <img src={SignInPic} alt='Sign In' className='h-full w-full object-scale-down rounded-4xl' />
            </div>
            <div className='h-full w-[50%] flex flex-col justify-center p-8'>
                <h1 className='font-bold text-2xl'>Sign in</h1>
                <form className='flex flex-col mt-4'>
                    <input type='email' placeholder='Email' className='mb-4 p-2 border rounded' />
                    <input type='password' placeholder='Password' className='mb-4 p-2 border rounded' />
                    <button type='submit' className='bg-[#2fbaa1] text-white p-2 rounded'>Sign In</button>
                </form>
                <p className='mt-4'>Don't have an account? <Link to='/' className='text-[#2fbaa1]'>Go to Sign Up</Link></p>
                
            </div>
        </div>
    </div>
  )
}

export default Login