import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NETFLIX_BACKGROUND } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();


  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const password2 = useRef(null);

  const handleToggleSignInForm = () => {  
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    let pass2=null,user=null;
    if(username.current && password2.current){
      pass2 = password2.current.value
      user = username.current.value
    }

    const validationRes = checkValidData(email.current.value,password.current.value, pass2, user);
    setErrorMsg(validationRes);

    if(validationRes) return;
    
    if(!isSignInForm){
        //SignUp user
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
          updateProfile(user, {
            displayName: username.current.value
            }).then(() => {
              const {uid, email, displayName} = auth.currentUser;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}))
              
            }).catch((error) => {
              setErrorMsg(error.message);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorCode + errorMessage);
          });

    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + errorMessage);
      });

    }
  }


  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='h-screen object-cover md:h-full' src={NETFLIX_BACKGROUND} 
            alt="backgroundImage"
            />
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className='w-5/6 md:w-[430px] absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80'>
            <p className='text-2xl md:text-3xl font-bold py-3'>
            {isSignInForm?"Sign In":"Sign Up"}
            </p><br/>
            
            {!isSignInForm && 
            (<input ref={username} className='p-4 my-4 w-full rounded-md bg-gray-700' 
            type="text" placeholder='Full Name'/>)}
            
            <input ref={email} className='p-4 my-4 w-full rounded-md bg-gray-700' 
            type="text" placeholder='Email or phone number'/><br/>

            <input ref={password} className='p-4 my-4 w-full rounded-md bg-gray-700' 
            type='password' placeholder='Password'/><br/>

            {!isSignInForm && 
            (<input ref={password2} className='p-4 my-4 w-full rounded-md bg-gray-700' 
            type='password' placeholder='Confirm Password'/>)}
            
            <p className='text-red-500 font-bold'>{errorMsg}</p>

            <button className='p-4 my-6 bg-red-700 w-full rounded-md' 
            type="submit" onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button><br/>
            
            <p className='py-4 cursor-pointer' onClick={handleToggleSignInForm}>
            {isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In"} </p>

        </form>
    </div>
  )
}

export default Login