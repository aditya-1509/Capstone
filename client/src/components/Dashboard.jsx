import React from 'react'
import { redirect } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <button onClick={()=>{
        localStorage.clear()
        redirect('/login')
      }}>Logout</button>
    </div>
  )
}

export default Dashboard
