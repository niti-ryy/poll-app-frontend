import React from 'react'
import { userContext } from '../App'
import { useContext } from 'react'

const Dashboard = () => {
    const {state}=useContext(userContext)
    console.log(state)
  return (
    <div>
        <h2>Dashboard</h2>
        <h3>welcome-..{state.user.username}</h3>  
    </div>

  )
}

export default Dashboard