import React from 'react'
import { Link } from 'react-router-dom'
import SignInPic from '../assets/male-freelancer-working-from-home-vector.jpg'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const handleSignUp = async (e) =>{
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("User created!");
        })
        .catch((error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        }))
    }


    


  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full'>
        <div className=' h-[500px] w-[860px] bg-white rounded-4xl shadow-lg flex'>
            <div className='h-full w-[50%] rounded-4xl'>
                <img src={SignInPic} alt='Sign In' className='h-full w-full object-scale-down rounded-4xl' />
            </div>
            <div className='h-full w-[50%] flex flex-col justify-center p-8'>
                <h1 className='font-bold text-2xl'>Sign up</h1>
                <form className='flex flex-col mt-4'>
                    {/* <input type='text' placeholder='Username' className='mb-4 p-2 border rounded' /> */}
                    <input type='email' 
                            label='Email address'
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder='Email' 
                            className='mb-4 p-2 border rounded' 
                    />
                    <input type='password' 
                            label='Create Password'
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password' 
                            className='mb-4 p-2 border rounded' 
                    />
                    <button type='submit' 
                            className='bg-[#2fbaa1] text-white p-2 rounded'
                            onClick={handleSignUp}
                    >
                                Sign Up
                    </button>
                </form>
                <p className='mt-4'>Already have an account? <Link to='/' className='text-[#2fbaa1]'>Go to Sign in</Link></p>
                
            </div>
        </div>
    </div>
  )
}

export default SignUp