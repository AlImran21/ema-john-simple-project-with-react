import React, { useState } from 'react';
import './SignUp.css';
import GoogleLogo from '../../images/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate ();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword (auth);


    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate ('/')
    }

    const handleCreateUser = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Your two password didn't match");
            return;
        }

        if (password.length < 6) {
            setError ("Password must be 6 characters or longer");
            return;
        }

        createUserWithEmailAndPassword (email, password)
        
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>SignUp</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" />
                    </div>
                    <p style={{color: 'red'}}>
                        {error}
                    </p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p className='text-center'>
                    <span className='form-link form-link-signup'>Already have an account? </span>
                    <Link className='new-to-ema-text login-text' to='/login'>Login</Link>
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

export default SignUp;