import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignInPic from '../assets/male-freelancer-working-from-home-vector.jpg'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function Login() {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setLoading(false);
            navigate('/home');
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });

        
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full'>
        <div className=' h-[500px] w-[860px] bg-white rounded-4xl shadow-lg flex'>
            <div className='h-full w-[50%] rounded-4xl'>
                <img src={SignInPic} alt='Sign In' className='h-full w-full object-scale-down rounded-4xl' />
            </div>
            <div className='h-full w-[50%] flex flex-col justify-center p-8'>
                <h1 className='font-bold text-2xl'>Login</h1>
                <form className='flex flex-col mt-4'>
                    <input type='email' 
                            label='Email address'
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email' 
                            className='mb-4 p-2 border rounded' />

                    <input type='password' 
                            placeholder='Password' 
                            label='Create Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='mb-4 p-2 border rounded' />

                    <button type='submit' 
                            onClick={handleLogin}
                            className='bg-[#2fbaa1] text-white p-2 rounded'>
                                Login
                    </button>
                </form>
                <p className='mt-4'>Don't have an account? <Link to='/signup' className='text-[#2fbaa1]'>Go to Sign Up</Link></p>
                
            </div>
        </div>
    </div>
  )
}

export default Login