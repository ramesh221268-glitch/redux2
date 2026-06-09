import React, { createContext, useContext } from 'react'
import Training from './Training'
import DestructuringProps from './DestructuringProps'
import Apiwork from './Apiwork'
import axios from "axios";
import Apiwork2 from './Apiwork2';
import './App.css'
import Formnew from './Formnew';
import Stopclock from './Stopclock';
import Useref from './Useref';
import First from './Createcontex.jsx/First';
import UseReducer from './UseReducer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Redux/Home';
import User from './Redux/User';
import About from './Redux/About';
import Contact from './Redux/Contact';


export const Pass=createContext();

export default function App() {
 
const metal=["gold" , "silver" , "platinum" , "iron" , "steel" , "rubber"]

const name="ramesh"
const age="40"
const tel="0000000000"

const name2="rajesh"
const age2="45"
const tel2="1000000000"

const name3="mahesh"
const age3="35"
const tel3="2000000000"


  return (
  
    <div>
      
      <BrowserRouter>
      <div style={{border:"3px solid black",padding:"50px", marginTop:"10px",
        backgroundColor:"#E0FFFF"
      }}>
        <h2 style={{justifyContent:"left",display:"flex"}}>Welcome</h2>
        <nav style={{justifyContent:"right", display:"flex",gap:"20px"}}>
        <Link to="/Home" style={{textDecoration:"none", color:"blue", fontSize:"18px"}}>Home</Link>
        <Link to="/User"style={{textDecoration:"none",color:"blue", fontSize:"18px"}}>User</Link>
        <Link to="/About"style={{textDecoration:"none",color:"blue", fontSize:"18px"}}>About</Link>
        <Link to="/Contact"style={{textDecoration:"none",color:"blue", fontSize:"18px"}}>Contact</Link>
        </nav>
       

      </div>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Home" element={<Home/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      {/* <UseReducer/>
        <h2>Usecontext</h2>
      <div style={{border:"2px solid black", padding:"20px"}}>
      
        <Pass.Provider value={name}>
        <First/>
        </Pass.Provider>
      </div>
      <Useref/> */}
      {/* <Stopclock/> */}
      {/* <Formnew/> */}
      {/* <Apiwork/> */}
      {/* <Apiwork2/> */}
      {/* my name is {name}
    <Training firstName={name} trainerAge={age} trainerCall={tel}/>
    <h3>Metal</h3>
    <ul>
    {metal.map((mine,ind) => (<li key={ind}>{mine}</li>))}
    </ul>
    <DestructuringProps name={name} age={age} tel={tel}/>
    <DestructuringProps name={name2} age={age2} tel={tel2}/>
    <DestructuringProps name={name3} age={age3} tel={tel3}/> */}

    </div>
  )
}
