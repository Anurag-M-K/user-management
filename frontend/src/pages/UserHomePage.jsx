import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserHome from '../components/UserHome/UserHome'

function UserHomePage() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            localStorage.removeItem('token');
            navigate('/')
        }else{
            navigate('/home')
        }
    }, []);
  return (

<>
<UserHome/>
</>
    )
}

export default UserHomePage