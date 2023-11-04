
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../security/AuthProvider'

const NavBar = () => {

  const context = useAuth()

  const authenticated = context.isAuthenticated

  return (
    <div className="bg-gray-800 flex">
      <div className='text-white h-16 items-center flex'>
        <p className='px-5 font-bold'>Todo Management</p>
      </div>

      {
        authenticated && 

        <div className='text-white h-16 items-center flex'>
          <Link to={`/welcome/${context.username}`} className='px-3 py-1 font-bold hover:bg-gray-600'>Home</Link>
        </div>
      }
      

    {
      authenticated && 

      <div className='text-white h-16 items-center flex'>
        <Link to="/todos" className='px-3 py-1 font-bold hover:bg-gray-600'>Todos</Link>
      </div>
    }
      

      <div className="flex absolute right-20 space-x-5">
        {
          !authenticated && 
          
          <div className='text-white h-16 items-center flex '>
              <Link to= "/login" className='px-3 py-1 font-bold hover:bg-gray-600'>Login</Link>
          </div>

        }
      
        {
          authenticated && 

          <div className='text-white h-16 items-center flex '>
              <Link to="/logout" className='px-3 py-1 font-bold hover:bg-gray-600' onClick={()=>context.setAuthenticated(false)}>Logout</Link>
          </div>

        }
      
      </div>
    </div>
  )
}

export default NavBar
