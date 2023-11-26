import React from 'react'
import {Link} from "react-router-dom"

const PollItem = (props) => {
    console.log(props)
    const {_id,categoryId,question}=props
  return (
    <li>
        <Link to={`/polls/${_id}`}>{question}</Link>-<Link to={`/polls/category/${categoryId._id}`}>{categoryId.name}</Link>
        
    </li>
  )
}

export default PollItem