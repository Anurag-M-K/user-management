import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp';

const UserSignup = () => {

    const navigate = useNavigate()

    useEffect(() => {
       const token = localStorage.getItem('token');
       if(!token){
        localStorage.removeItem('token')
        navigate('/signup')
       }else{
        navigate('/home')
       }
    }, []);
    return (
       <>
       
       <SignUp/>
       </>
    );
}

export default UserSignup;
