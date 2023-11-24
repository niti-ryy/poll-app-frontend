import React, { useState } from 'react'
import axios from './config'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [formData,setFormData]=useState({
        username:"",
        password:"",
        email:""
    })
    const [serverErrors,setSereverErrors]=useState([])
    const Navigate=useNavigate()
    const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
    }

    const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
        const response=await axios.post("/auth/register",formData)
        console.log(response.data)
        setFormData({
            username:"",
            password:"",
            email:""
        })
        Navigate('/login',{state:{message:"not you have been redirected to login page"}})
        
    }catch(e){
        setSereverErrors(e.response.data.errors)
        
    }
}


    return (
    <div>
        <h1>Register Form</h1>
        {
            serverErrors.length>0 && (
                <div>
                    <h3>These errors prevented form from submitting please correct these error</h3>
                    <ul>
                        {
                            serverErrors.map((ele)=>{
                                return <li><b>{ele.msg}</b></li>
                            })
                        }
                    </ul>
                </div>
            )
        }
        <form onSubmit={handleSubmit}>
            <label>Username</label><br/>
            <input type="text" onChange={handleChange} name="username" value={formData.username} /><br/>
            <label>Email</label><br/>
            <input type="text" onChange={handleChange} name="email" value={formData.email} /><br/>
            <label>Password</label><br/>
            <input type="password" onChange={handleChange} name="password" value={formData.password}/><br/>
            <input type="Submit" value="Submit"/> 
        </form>
        
    </div>
    )
    }

    export default Register