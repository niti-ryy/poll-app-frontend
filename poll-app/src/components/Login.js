import { useState } from "react"
import React from 'react'



const Login = () => {

    const [formData,setFormData]=useState({
        password:"",
        email:""
    })
    
    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData({...formData,[name]:value})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div>
    <h1>Login Form</h1>
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