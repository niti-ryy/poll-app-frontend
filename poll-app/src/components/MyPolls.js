import React from 'react'
import { useContext } from 'react'
import  {userContext} from "../App"


const MyPolls = () => {
    const {state}=useContext(userContext)
  return (
    <div>
        <h1>My Polls -{state.myPolls.length}</h1>
    </div>
  )
}

export default MyPolls