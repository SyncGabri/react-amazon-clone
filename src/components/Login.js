import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/Login.css';
import { auth } from '../firebase';

import logo from "../assets/amazon_logo_black.png";

function Login() {
    const history = useHistory();
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(error => alert(error.message));
    };

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log(auth); //success
                if(auth){
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login-logo' src={logo} alt='img-logo' />
            </Link>
            <div className='login-container'>
                <h1>Sign In</h1>
                
                <form>
                    <h5>Email</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required/>

                    <button type='submit' className='login-btn-signin' onClick={signIn}>
                        Sign In
                    </button>
                </form>

                <p>
                    By signin-in you agree Amazon Clone's Conditions of Use & Sale.
                    Please see out Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login-btn-register' onClick={register}> 
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login