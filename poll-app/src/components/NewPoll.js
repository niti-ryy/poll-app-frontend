import React, { useEffect } from 'react'
import {useState} from "react"
import axios from './config'
const NewPoll = () => {
    const [question,setQuestion]=useState("")
    const [categories,setCategories]=useState([])
    const [category,setCategory]=useState("")
    const [categoryName,setCategoryName]=useState("")
    const [endDate,setEndDate]=useState("")
    const [options,setOptions]=useState([])

    useEffect(()=>{
        (async()=>{
            try{
                const response=await axios.get("http://localhost:4096/api/categories")
                console.log(response.data)
                setCategories(response.data)
            }catch(e){
                alert(e.message)
            }
        })()
    },[])

    const handleAdd=async()=>{
        if(categoryName){
            try{
                const response=await axios.post("http://localhost:4096/api/categories",
                {name:categoryName},{
                    headers:{
                        "Authorization":localStorage.getItem("token")
                    }
                })
                const category=response.data
                setCategories([...categories,category])
                setCategory(category._id)
                setCategoryName("")
            }catch(e){
                alert(e.message)
            }
        }
    }

    const handleAddOption=()=>{
        const option={
            optionText:""
        }
        setOptions([...options,option])
    }

    const handleRemoveOption=(index)=>{
        const newArr=options.filter((ele,i)=>{ 
            return i !== index
        })
        setOptions(newArr)
    }

    const handleOptionText=(index,value)=>{
        const newArr=options.map((ele,i)=>{
            if(i==index){
                return {...ele,optionText:value}
            }else{
                return {...ele}
            }
        })
        setOptions(newArr)
    }

    const handleSubmit=async()=>{
        const today=new Date()
        const formData={
            question:question,
            endDate:endDate,
            createdDate:`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`,
            categoryId:category,
            options:options
        }

        try{
            const response=await axios.post("/api/polls",formData,{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            console.log(response.data)
            setQuestion("")
            setEndDate("")
            setCategoryName("")
            setOptions([])
            setCategory("")
        }catch(e){
            alert(e.message)
        }
        
    }
    return (
        <div >
            <h1>Add New Poll</h1>
            <label htmlFor='question'>
                Enter Question  :-
                <input type="text" value={question} id="question" onChange={(e)=>{setQuestion(e.target.value)}}/>
            </label><br/>
            <label >
                Select Category
                <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="">Select</option>
                    {categories.map((ele)=>{
                        return <option key={ele.id} value={ele._id}>{ele.name}</option>
                    })}
                </select>
                or
                <input type="text" value={categoryName} onChange={(e)=>{setCategoryName(e.target.value)}} placeholder='Add you Category'/><button onClick={handleAdd}>Submit</button>
            </label><br/>
            <label>
                End Date
                <input type='Date' value={endDate} onChange={(e)=>{setEndDate(e.target.value)}}/>
            </label><br/>
            <label>Add options</label>
               {options.map((ele,i)=>{
                    return <div key={i}>
                        <input type="text" value={ele.optionText} onChange={(e)=>{handleOptionText(i,e.target.value)}}/>
                        <button onClick={()=>{handleRemoveOption(i)}}>remove</button>
                    </div>                   
               })}<br/>             
            <button onClick={handleAddOption}>Add Option</button><br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
    }

export default NewPoll