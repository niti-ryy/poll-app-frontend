// import React from 'react'
// import { useContext } from 'react'
// import {userContext} from "../App"
// import { useParams } from 'react-router-dom'

// const PollShow = () => {
//     const {state}=useContext(userContext) 
//     const {myPolls}=state
//     const {id}=useParams()
//     const poll=myPolls.find((ele)=>{
//         return ele._id==id
//     })
//     console.log(poll)
//   return (
//     <div>
//         <h2>Poll-Show</h2>
//         <h2>{poll.question}</h2>
//         {/* <ul>
//             {poll.options}
//         </ul> */}
//     </div>
//   )
// }

// export default PollShow
import React from 'react';
import { useContext } from 'react';
import { userContext } from '../App';
import { useParams } from 'react-router-dom';

const PollShow = () => {
  const { state } = useContext(userContext);
  const { myPolls } = state;
  const { id } = useParams();
  const poll = myPolls.find((ele) => ele._id === id);

  return (
    <div>
      <h2>Poll-Show</h2>
      {poll ? (
        <>
          <h2>{poll.question}</h2>
          <ul>
            {poll.options.map((option, index) => (
              <li key={index}>{option.optionText}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Poll not found.</p>
      )}
    </div>
  );
};

export default PollShow;


