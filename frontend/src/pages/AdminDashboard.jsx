import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserList from '../components/UserList/UserList'



const  AdminDashboard=()=> {

    const navigate = useNavigate()

    useEffect(() => {
       const token = localStorage.getItem('token')
       if(!token){
        localStorage.removeItem('token')
        navigate('/admin')
       }else{
        navigate('/admin/dashboard')
       }
    }, []);
  return (
<>
<UserList/>
</>  )
}

export default AdminDashboard