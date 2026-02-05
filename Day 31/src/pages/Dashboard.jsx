import React from 'react'
import useAuth from '../auth/useAuth'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = ()=>{
        logout();
        navigate("/login")
    }

  return (
    <div>
      <h1>This is Dashboard Page</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Dashboard
