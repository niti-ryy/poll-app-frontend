import React, { useContext } from 'react'
import {PollsContext} from "../App"

const Home = () => {
  const {pollsState}=useContext(PollsContext)
  const active=pollsState.activePolls
  return (
    <div>
        <h2>HOME</h2>
        <h2>Active Polls-{active.length}</h2>
    </div>
  )
}

export default Home