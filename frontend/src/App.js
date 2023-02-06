import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './pages/AdminDashboard';
import AdminLoginPage from './pages/AdminLoginPage';
import UserHomePage from './pages/UserHomePage';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import { AuthContext } from './store/AuthContext';

function App() {
  const [user,setUser] = useState("")
  const [isLoggedin,setIsLoggedin] = useState(false)
  return (

    <AuthContext.Provider value={{user,setUser,isLoggedin,setIsLoggedin}}>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<UserLogin/>}/>
         <Route exact path='/signup' element={<UserSignup/>}/>
         <Route exact path='/home' element={<UserHomePage/>} />
         <Route exact path='/admin' element={<AdminLoginPage/>}/>
         <Route exact path='/admin/dashboard' element={<AdminDashboard/>} />

      </Routes>
      </BrowserRouter>
    </AuthContext.Provider>

  )



}

export default App;
