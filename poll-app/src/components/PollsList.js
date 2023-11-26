import React from 'react'

import PollItem from './PollItem'

const PollsList = (props) => {
    const {polls}=props
  return (
    <div> 
        <ul>
            {polls.map((ele)=>{
                // return <li><Link>{ele.question}</Link>-<Link>{ele.categoryId.name}</Link></li>
                return <PollItem {...ele}/>
            })}
        </ul>
    </div>
  )
}

export default PollsList