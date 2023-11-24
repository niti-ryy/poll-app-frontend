import React from 'react'
import { useContext } from 'react'
import {userContext} from "../App"
import { useParams } from 'react-router-dom'

const PollShow = () => {
    const {state}=useContext(userContext) 
    const {myPolls}=state
    const {id}=useParams()
    const poll=myPolls.find((ele)=>{
        return ele._id==id
    })
    console.log(poll)
  return (
    <div>
        <h2>Poll-Show</h2>
        <h2>{poll.question}</h2>
    </div>
  )
}

export default PollShow