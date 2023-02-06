import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useContext ,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../store/AuthContext';

function SignUp() {

const navigate = useNavigate();
const {user,setUser,isLoggedIn,setIsLoggedin} = useContext(AuthContext)

const initialState = {
    fname:"",
    lname:"",
    username:"",
    email:"",
    password :"",
}

const [signUpData,setSignupData] = useState(initialState)

const handleSignUp = async (e)=>{
    e.preventDefault();
    try {
        await axios.post('/user',signUpData).then((res)=>{
            let userData = res.data;
            localStorage.setItem('token',userData.token)
            setIsLoggedin(true)
            navigate('/home')
        })
    } catch (error) {
        console.log(error.response.data)
        
    }
}

useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
        localStorage.removeItem('token');
        navigate('/')
    }else{
        navigate('/home')
    }
    
}, [isLoggedIn]);

  return (
    <div>

        <div class="login">
            <div class="login-data">
                <div class="text">
                    Sign Up
                </div>
                <div className='form'>
                    <div class="data">
                        <label>First Name</label>
                        <input type="text" placeholder='First Name'
                            value={signUpData.fname} onChange={(e) => setSignupData({ ...signUpData, fname: e.target.value })} /><br /><br />
                    </div>
                    <div class="data">
                        <label>Last Name</label>
                        <input type="text" placeholder='Last Name'
                            value={signUpData.lname} onChange={(e) => setSignupData({ ...signUpData, lname: e.target.value })} />
                    </div>
                    <div class="data">
                        <label>User Name</label>
                        <input type="text" placeholder='User Name'
                            value={signUpData.username} onChange={(e) => setSignupData({ ...signUpData, username: e.target.value })} />
                    </div>
                    <div class="data">
                        <label>Email</label>
                        <input type="text" placeholder='Email'
                            value={signUpData.email} onChange={(e) => setSignupData({ ...signUpData, email: e.target.value })} />
                    </div>
                    <div class="data">
                        <label>Password</label>
                        <input type="password" placeholder='Password'
                            value={signUpData.password} onChange={(e) => setSignupData({ ...signUpData, password: e.target.value })} />
                    </div>
                    <div class="btn">
                        <div class="inner"></div>
                        <button onClick={handleSignUp}>Login</button>
                    </div>
                    <div class="signup-link">
                       Already have an account?
                        <Link to="/" className='link'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default SignUp