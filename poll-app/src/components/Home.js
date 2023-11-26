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
    </div>
  )
}

export default Home