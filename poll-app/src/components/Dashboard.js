import React from 'react'
import { userContext } from '../App'
import { useContext } from 'react'

const Dashboard = () => {
    const {state}=useContext(userContext)
    
  return (
    <div>
        <h2>Dashboard</h2>
        <h3>welcome-{state.user.username}</h3>
        <h2>Total Polls-{state.myPolls.length}</h2>
    </div>

  )
}

export default Dashboard