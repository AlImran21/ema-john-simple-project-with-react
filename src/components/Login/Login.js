import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import GoogleLogo from '../../images/google.svg';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail] = useState ();
    const [password, setPassword] = useState ();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword (auth);
      
      const navigate = useNavigate ();
      let location = useLocation ();
      let from = location?.state?.from?.pathname || '/';

    const handleEmailBlur = (event) => {
        setEmail (event.target.value);
    }

    const handlePasswordBlur = (event) => {
        setPassword (event.target.value);
    }

    if (user) {
        navigate (from, {replace: true})
    }

    const handleUserSignIn = (event) => {
        event.preventDefault ();
        signInWithEmailAndPassword (email, password);


    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id=""  required/>
                    </div>
                    <p style={{color: 'red'}}>
                        {error?.message}
                    </p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='text-center'>
                    <span className='new-to-ema-text'>New to Ema-John?</span> <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='input-wrapper'>
                    <button className='google-auth'>
                        <img src={GoogleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;