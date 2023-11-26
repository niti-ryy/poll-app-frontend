import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import userReducer from "./reducers/user-reducer";
import { createContext, useEffect, useReducer } from "react";
import Dashboard from "./components/Dashboard";
import axios from "./components/config"

import NavBar from "./components/Nav";
import NewPoll from "./components/NewPoll";
import MyPolls from "./components/MyPolls";
import PollShow from "./components/PollShow";
import pollsReducer from "./reducers/poll-reducer";
export const userContext=createContext()
export const PollsContext=createContext()

function App() {
  const [state,dispatch]=useReducer(userReducer,{user:{},myPolls:[]})
  const [pollsState,pollsDispatch]=useReducer(pollsReducer,{activePolls:[]})
  

  
  useEffect(()=>{
    if(localStorage.getItem("token")){   //handling page reload
      (async()=>{
          try{
              const response=await axios.get("/api/users/account",{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            dispatch({type:"USER_LOGIN",payload:response.data})
            
            const pollResponse=await axios.get("/api/polls/myPolls",{
              headers:{
                "Authorization":localStorage.getItem("token")
            }
          })
          dispatch({type:"SET_MY_POLLS",payload:pollResponse.data})
           
          }catch(e){
            alert(e.message)
          }
      })()
    }
    (async()=>{
      try{
        const pollsResponse=await axios.get("/api/polls/active")
        console.log(pollsResponse.data)
        pollsDispatch({type:"SET_ACTIVE_POLLS",payload:pollsResponse.data})
      }catch(e){
        alert(e.message)
      }
    })()
  },[])
  return (
  <BrowserRouter>
    <userContext.Provider value={{state,dispatch}}>
      <PollsContext.Provider value={{pollsState,pollsDispatch}}>
        <div >
          <h1>Polling App</h1>
          <NavBar/>
        </div>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard"element={<Dashboard/>}/>
          <Route path="/polls/new" element={<NewPoll/>}/>
          <Route path="/polls/my-polls" element={<MyPolls/>}/>
          <Route path="/my-polls/:id" element={<PollShow/>}/>
        </Routes>
        </PollsContext.Provider>
    </userContext.Provider>
  </BrowserRouter>
      
  );
}

export default App;
