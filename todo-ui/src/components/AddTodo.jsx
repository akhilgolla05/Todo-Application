

import React, { useState } from 'react'
import { createTodoApi } from '../services/ApiServices'
import { useNavigate } from 'react-router-dom'

const AddTodo = () => {


  const [todo, setTodo] =  useState(
    {
    firstName : "",
    lastName : "",
    userName : "",
    email : "",
    description : ""
  })


  const handleChange = (event)=>
  {
    const value = event.target.value
    setTodo({...todo, [event.target.name] : value})
    console.log(todo)
  }


  const navigate = useNavigate()

  const saveTodo = ()=>{

    createTodoApi(todo)
    .then((response)=>{
      console.log(response)
      navigate("/login")
    })
    .catch((error)=>{console.log(error)})

  }

  const clearTodo = ()=>
  {
    setTodo(
      {
        firstName : "",
        lastName : "",
        userName : "",
        email : "",
        description : ""
      }
    )
  }


  return (
    <div className="max-w-xl mx-auto border-b shadow py-6 my-10 bg-gray-400">

      <div className=' w-full '>
        <p className=' text-center font-semibold text-lg  px-1 py-1 mx-2'>Add Your Todo</p>
      </div>
      <div className='  w-full '>
        <label htmlFor='firstName' className=" block font-norml text-lg  px-1 py-1 mx-2">First Name</label>
        <input type="text" id="firstName" name="firstName" value={todo.firstName} className='border px-2 mx-2' onChange={handleChange}/>
      </div>

      <div className=' w-full '>
        <label htmlFor='lastName' className=" block font-norml text-lg  px-1 py-1 mx-2">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={todo.lastName} className='border px-2 mx-2' onChange={handleChange}/>
      </div>

      <div className=' w-full '>
        <label htmlFor='userName' className=" block font-norml text-lg  px-1 py-1 mx-2">UserName</label>
        <input type="text" id="userName" name="userName" value={todo.userName} className='border px-2 mx-2' onChange={handleChange}/>
      </div>

      <div className=' w-full '>
        <label htmlFor='email' className=" block font-norml text-lg  px-1 py-1 mx-2">Email</label>
        <input type="email" id="email" name="email" value={todo.email} className='border px-2 mx-2' onChange={handleChange}/>
      </div>

      <div className=' w-full '>
        <label htmlFor='description' className=" block font-norml text-lg  px-1 py-1 mx-2">Description</label>
        <textarea rows="5" cols="50" name="description" value={todo.description} className='border px-2 mx-2' onChange={handleChange}></textarea>
      </div>

      <div>
        <button onClick={saveTodo} className=' mx-1 px-3 py-2 my-2 text-center text-white rounded bg-green-600 hover:bg-green-800'>Save</button>
        <button onClick={clearTodo} className=' mx-1 px-3 py-2 my-2 text-center text-white rounded bg-red-500 hover:bg-red-800'>Clear</button>
      </div>
    </div>
  )
}

export default AddTodo
