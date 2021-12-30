import { useState } from "react"

export const Form =()=>{
   const [form , setForm ] =useState({
       username:"",
       age:"",
   })
   const handleChange =(e)=>{
      //console.log(e.target.name , e,target.value)
      const {name, value} = e.target 
      setForm({
          ...form , [name]: value,
      })
   }
   

   const handleSubmit =(e)=>{
       e.preventDefault()
       console.log(form)
   }
    return (
        <form onSubmit={handleSubmit}>
            <br/>
            <br/>
            <label>Name:</label>
           <input onChange={handleChange} name ="username" type="text" placeholder="enter name "/>
           <br/>
           <br/>
           <br/>
           <label>Number:</label>
           <input onChange={handleChange} name ="age" type="number" placeholder="enter number "/>
           <br/>
           <br/>
           <br/>
           <button  type="submit">submit</button>
        </form>
      
    )
}