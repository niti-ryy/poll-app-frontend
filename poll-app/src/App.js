import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import userReducer from "./reducers/user-reducer";
import { createContext, useEffect, useReducer } from "react";
import Dashboard from "./components/Dashboard";
import axios from "axios";

import NavBar from "./components/Nav";
import NewPoll from "./components/NewPoll";

export const userContext=createContext()

function App() {
  const [state,dispatch]=useReducer(userReducer,{user:{}})

  
  useEffect(()=>{
    if(localStorage.getItem("token")){
      (async()=>{
          try{
              const response=await axios.get("http://localhost:4096/api/users/account",{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            dispatch({type:"USER_LOGIN",payload:response.data})
          }catch(e){

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
        </Routes>
    </userContext.Provider>
  </BrowserRouter>
      
  );
}

export default App;
