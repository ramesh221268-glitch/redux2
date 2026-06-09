import React from 'react'
import { useSelector } from 'react-redux'

export default function User() {
 
   const users= useSelector((state)=>state.userinfo.users);
    console.log(users);
  
  return (
    <div>
      {users?.map((user,index)=>
      {
        return(
        <div key={index} style={{
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "15px 0",
   
  }}>
          <h2>name:{user.name}</h2>
          <h2>age:{user.age}</h2>
          <h2>email:{user.email}</h2>
          <h2>contact:{user.contact}</h2>
        </div>
        )
      })
      }
    

    </div>
  )
}
