import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../App'
import _ from "lodash"

const NavBar = () => {

    const {state,dispatch}=useContext(userContext)
    const navigate=useNavigate()

    const handleLogout=()=>{
        localStorage.removeItem("token")
        dispatch({type:"LOGOUT_USER"}) 
        navigate("/")      
      }
  return (
    <nav>
            <li><Link to="/">Home</Link></li>   
            {
              _.isEmpty(state.user) ?(
                <>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </>
              ):(
                <>
                  <li><Link to="/dashboard">dashboard</Link></li> 
                  <li><Link to="/polls/new">Create Poll</Link></li>
                  <li><Link to="/polls/my-polls">My Polls</Link></li>
                  <li><Link to="/" onClick={handleLogout}>logout</Link></li>
                </>
              )
            } 
          </nav>
  )
}

export default NavBar