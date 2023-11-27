import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PollsContext,userContext } from '../App'
import _ from 'lodash'

const SinglePole = () => {
    const {id}=useParams()
    const {pollsState}=useContext(PollsContext)
    const {state}=useContext(userContext)
    const navigate=useNavigate()
    
    const poll=pollsState.activePolls.find((ele)=>{
        return ele._id===id
    })
    
    const handleClick=()=>{
        navigate("/login")
    }
    
    return (
        <div>
          {poll ? (
            <div>
              <h3>{poll.question}-<small>{poll.categoryId.name}</small></h3>
              <h3>Options</h3>
              <ul>
                {poll.options.map((ele) => (
                <li key={ele._id}>
                <input 
                    type="radio" 
                    disabled={_.isEmpty(state.user)} 
                    value={ele._id} 
                    name="poll"
                    id={ele._id}/>
                <label htmlFor={ele._id}>{ele.optionText}</label>
                </li>
                ))}
                
              </ul>
              <p>created by {poll.creator.username} expires on -{poll.endDate}</p>
              {_.isEmpty(state.user)?<button  onClick={handleClick}>Login to Vote</button>:<button>Vote</button>}
            </div>
          ) : (
            <h1>No Polls Found with this id</h1>
          )}
        </div>
      );
   }    


export default SinglePole