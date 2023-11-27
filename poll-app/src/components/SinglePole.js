import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PollsContext } from '../App'

const SinglePole = () => {
    const {id}=useParams()
    const {pollsState}=useContext(PollsContext)
    
    const poll=pollsState.activePolls.find((ele)=>{
        return ele._id===id
    })
    console.log(poll)
    
    return (
        <div>
          {poll ? (
            <div>
              <h3>{poll.question}-<small>{poll.categoryId.name}</small></h3>
              <h3>Options</h3>
              <ul>
                {poll.options.map((ele) => (
                  <li key={ele._id}>
                    {ele.optionText}<input type="radio" value={ele._id} name="poll"/>
                  </li>
                ))}
              </ul>
              <p>created by {poll.creator.username} expires on -{poll.endDate}</p>
            </div>
          ) : (
            <h1>No Polls Found with this id</h1>
          )}
        </div>
      );
   }    


export default SinglePole