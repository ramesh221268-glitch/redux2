import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setusers } from './Slice/Reduxslice';

export default function Home() {
  const dispatch=useDispatch();
  const[forminput,setforminput]=useState({
    name:"",
    age:"",
    email:"",
    contact:""
  })
const handleinput=(e)=>{
 
  setforminput((currentinput)=>{
    return{
      ...currentinput,
      [e.target.name]:e.target.value,
    }
  })

}
const addfield=(e)=>{
  e.preventDefault();
  dispatch(setusers(forminput));
}
  return (
    <div style={{ alignItems:"flex-end", padding:"20px", gap:"20px"}}>
        <h2>Home</h2>
        <p>name:
        <input name="name" value={forminput.name} type="text" onChange={handleinput}  
        style={{padding:"2px"}}/></p>
        <p>age:
        <input name="age" value={forminput.age} type="number" onChange={handleinput} 
        style={{padding:"2px" }}/></p>
        <p>email:
        <input name="email" value={forminput.email} type="text" onChange={handleinput} 
        style={{padding:"2px"}}/></p>
        <p>contact:
        <input name="contact" value={forminput.contact} type="number" onChange={handleinput} 
        style={{padding:"2px"}} /></p>
        <button onClick={addfield}>Submit</button>
    </div>
  )
}
