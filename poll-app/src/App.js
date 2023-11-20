import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import userReducer from "./reducers/user-reducer";
import { createContext, useReducer } from "react";
import Dashboard from "./components/Dashboard";

import NavBar from "./components/Nav";

export const userContext=createContext()

function App() {
  const [state,dispatch]=useReducer(userReducer,{user:{}})

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
        </Routes>
    </userContext.Provider>
  </BrowserRouter>
      
  );
}

export default App;
