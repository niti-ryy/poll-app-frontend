import React from 'react'
import { useContext } from 'react'
import  {userContext} from "../App"
import { Link } from 'react-router-dom'


const MyPolls = () => {
    const {state}=useContext(userContext)
    
  return (
    <div>
        <h2>My Polls</h2>
        <h2>My Polls -{state.myPolls.length}</h2>
        <ul>
            {
                state.myPolls.map((ele)=>{
                    return <li key={ele._id}><Link to={`/my-polls/${ele._id}`}>{ele.question}</Link></li>
                })
            }
        </ul>
    </div>
  )
}

export default MyPolls

