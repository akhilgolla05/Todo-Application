
import React from 'react'

import { useEffect } from 'react'
import { retrieveTodos , deleteTodoApi} from '../services/ApiServices'

import { useState } from 'react'

const ListTodos = () => {

  const [todos, setTodos] = useState([])

  useEffect(
     ()=>{refreshTodos()},[]
  )
  
  const refreshTodos = async ()=>
  {
      retrieveTodos()
      .then((response)=>{
        console.log(response.data)
        setTodos(response.data)
       
      })
      .catch((error)=>console.log(error))
  }

  const deleteTodo = (id)=>
  {
      deleteTodoApi(id)
      .then(()=>refreshTodos())
      .catch((error)=>console.log(error))


  }



  // useEffect(()=>console.log(todos),[todos])


  return (
    <div className="max-w-2xl mx-auto mt-20 shadow">
      <div>
        <button className="bg-green-500 rounded px-2 py-2 my-2">Add Todo</button>
      </div>

      <div>
        <table className="min-w-full">
          <thead className="bg-gray-300">
            <tr>
              <th className="text-left font-medium uppercase px-2 py-2 tracking-wider">First Name</th>
              <th className="text-left font-medium uppercase px-2 py-2 tracking-wider">Last Name</th>
              <th className="text-left font-medium uppercase px-2 py-2 tracking-wider">Email</th>
              <th className="text-left font-medium uppercase px-2 py-2 tracking-wider">Description</th>
              <th className="text-left font-medium uppercase px-2 py-2 tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(
                todo=>(

                  <tr key={todo.id}>
                    <td className='text-left font-normal px-2 py-2'>{todo.firstName}</td>
                    <td className='text-left font-normal px-2 py-2'>{todo.lastName}</td>
                    <td className='text-left font-normal px-2 py-2'>{todo.email}</td>
                    <td className='text-left font-normal px-2 py-2'>{todo.description}</td>
                    <td className='flex space-x-2'>
                      <button className="bg-yellow-300 rounded pz-2 py-2 px-2 text-left">Update</button>
                      <button className="bg-red-500 rounded px-2 py-2 text-right" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </td>
                </tr>

                )
              )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default ListTodos
