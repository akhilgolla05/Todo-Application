import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { retrieveTodoByIdApi } from '../services/ApiServices'
import {updateTodoApi} from '../services/ApiServices'
import { useAuth } from '../security/AuthProvider'
const EditEmployee = () => {

    const [todo, setTodo] =  useState(
        {
        firstName : "",
        lastName : "",
        userName : "",
        email : "",
        description : ""
      })

      const [prevTodo, setPrevTodo] =  useState(todo)

      const context = useAuth()

      const {id} = useParams()
    //   console.log(id)

      useEffect(()=>{
        
        retrieveTodoByIdApi(id,context.username)
        .then((response)=>{setTodo(response.data)
        setPrevTodo(response.data)})
        .catch((error)=>console.log(error))
      },[id])

    //   const retrieveTodoById = ()=>{

       
    //   }

    const handleChange = (event)=>
    {
        const value = event.target.value
        setTodo({...todo, [event.target.name] : value})
        console.log(todo)
    }

    const navigate = useNavigate()

    

    const editTodo = ()=>
    {
        updateTodoApi(id, context.username, todo)
        .then(()=>{navigate("/todos")})
        .catch((error)=>console.log(error))
    }

    const clearTodo = ()=>{

        setTodo(prevTodo)
    }

  return (
    <div className="max-w-xl mx-auto border-b shadow py-6 my-10 bg-gray-400">

      <div className=' w-full '>
        <p className=' text-center font-semibold text-lg  px-1 py-1 mx-2'>Update Your Todo</p>
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
        <button onClick={editTodo} className=' mx-1 px-3 py-2 my-2 text-center text-white rounded bg-green-600 hover:bg-green-800'>Update</button>
        <button onClick={clearTodo} className=' mx-1 px-3 py-2 my-2 text-center text-white rounded bg-red-500 hover:bg-red-800'>Cancel</button>
      </div>
    </div>
  )
}

export default EditEmployee
