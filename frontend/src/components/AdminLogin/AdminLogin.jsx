import React from 'react'
import axios from 'axios'
import { AuthContext } from '../../store/AuthContext';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import './AdminLogin.css'

function AdminLogin() {

const navigate = useNavigate()
const {user,setUser,isLoggedin, setIsLoggedIn} = useContext(AuthContext)
const initialState = {
    username:"",
    password : "",
}

const [loginCredential,setLoginCredential] = useState(initialState)

const handleLogin = async(e)=>{
    e.preventDefault();

    try {
        
        await axios.post('/admin/adminlogin',loginCredential).then((response)=>{
            let userData = response.data;
            if(userData.token){
                localStorage.setItem('token',userData.token)
                setIsLoggedIn(true)
                alert('Login successfully')
                navigate('/admin/dashboard')
            }else{
                alert("Please check your username and password")
            }
        })
    } catch (error) {
        console.log(error.message);
        
    }
}

useEffect(() => {
  const token = localStorage.getItem('token');
  if(!token){
    localStorage.removeItem('token')
    navigate('/admin')
  }else{
    navigate('/admin/dashboard')
  }
    
}, [isLoggedin]);


  return (
    <div>
    <div class="login">
        <div class="login-data">
            <div class="text">
                LOGIN
            </div>
            <div className='form'>
                <div class="data">
                    <label>User Name</label>
                    <input type="text" placeholder='User Name'
                        value={loginCredential.username}
                        onChange={(e) => setLoginCredential({ ...loginCredential, username: e.target.value })}
                    /><br /><br />
                </div>
                <div class="data">
                    <label>Password</label>
                    <input type="password" placeholder='Password'
                        value={loginCredential.password}
                        onChange={(e) => setLoginCredential({ ...loginCredential, password: e.target.value })} />
                </div>
                <div class="btn">
                    <div class="inner"></div>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default AdminLogin