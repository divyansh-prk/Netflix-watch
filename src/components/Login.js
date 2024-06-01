 import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)

    }
  return (
    <div>
        <Header />

        <div className='absolute'>

        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
        Login page
        </div>

        <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && 
            <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' /> }
            <input type='text' placeholder='Email address' className='p-4 my-4 w-full bg-gray-800' />
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'> {isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign up Now" : "Already registered ? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login