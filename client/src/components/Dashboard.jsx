import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { token,setToken } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    setToken(null)
    navigate('/login')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
