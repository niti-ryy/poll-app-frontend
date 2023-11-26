import React from 'react'


const PollsList = (props) => {
    const {polls}=props
  return (
    <div>
        <ul>
            {polls.map((ele)=>{
                return <li>{ele.question}</li>
            })}
        </ul>
    </div>
  )
}

export default PollsList