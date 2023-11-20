import { useState,useContext } from "react"
import React from 'react'
import { useLocation } from "react-router-dom"
import axios from  "axios"
import  {useNavigate} from "react-router-dom"
import { userContext } from "../App"


const Login = () => {

    const [formData,setFormData]=useState({
        password:"",
        email:""
    })
    const [serverErrors,setSereverErrors]=useState([])
    const location=useLocation()
    const navigate=useNavigate()
    const {state,dispatch}=useContext(userContext) //using context 
    const message=location.state?location.state.message : ""
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const user=await axios.post("http://localhost:4096/auth/login",formData)
            localStorage.setItem("token",user.data.token)
            const accountReponse=await axios.get("http://localhost:4096/api/users/account",{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            console.log(accountReponse.data)
            dispatch({type:"USER_LOGIN",payload:accountReponse.data})
            navigate("/dashboard")
        }catch(e){
            setSereverErrors(e.response.data.errors)
           
        }
        
    }
    
  return (
    <div>
    <h1>Login Form</h1>
    {
            serverErrors.length>0 && (
                <div>
                    <h3>These errors prevented form from submitting please correct these error</h3>
                    <ul>
                        {
                            serverErrors.map((ele,i)=>{
                                return <li key={i}><b>{ele.msg}</b></li>
                            })
                        }
                    </ul>
                </div>
            )
        }
    <p>{message}</p>
    <form onSubmit={handleSubmit}>
        <label>Enter email</label><br/>
        <input type="text" onChange={handleChange} name="email" value={formData.email} /><br/>
        <label>Enter password</label><br/>
        <input type="password" onChange={handleChange} name="password" value={formData.password}/><br/>
        <input type="Submit" value="Submit"/> 
    </form>
    
</div>
  )
}

export default Login