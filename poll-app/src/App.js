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

export const userContext=createContext()

function App() {
  const [state,dispatch]=useReducer(userReducer,{user:{},myPolls:[]})
  

  
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
          }catch(e){
            alert(e.message)
          }
      })()
    }
  },[])
  return (
  <BrowserRouter>
    <userContext.Provider value={{state,dispatch}}>
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
        </Routes>
    </userContext.Provider>
  </BrowserRouter>
      
  );
}

export default App;
