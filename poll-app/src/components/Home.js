import React, { useContext } from 'react'
import {PollsContext} from "../App"
import PollsList from './PollsList'

const Home = () => {
  const {pollsState}=useContext(PollsContext)
  const polls=pollsState.activePolls
  return (
    <div>
        <h2>HOME</h2>
        <h2>Active Polls-{polls.length}</h2>
        <PollsList polls={polls}/>
        {/* <ul>
          {active.map((ele)=>{
            return <li key={poll._id}>{ele.question}</li>
          })}
        </ul> */}
    </div>
  )
}

export default Home