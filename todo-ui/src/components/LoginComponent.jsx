import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../security/AuthProvider'
import { Link } from 'react-router-dom'

const LoginComponent = () => {

    const [username, setUsername] = useState("")

    

    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState(false)

    const context = useAuth()
    

    const handleUsername = (e)=>
    {
        // console.log(e.target.value)
        setUsername(e.target.value)
        // console.log(username)
    }



    const validate = ()=>
    {
        if(context.validateUser(username))
        {
            setErrorMessage(false)
            navigate(`/welcome/${username}`)
            
        }
        else{
            
            setErrorMessage(true)
            
        }
    }

  return (
    <div className='shadow mx-auto max-w-xl mt-40 border-b'>
        
        <div>
            <p className="text-center text-gray-500 font-semibold">New User? want to add your todos aswell, <Link to="/add" className="tracking-wider text-blue-500 font-normal">Create Todo</Link></p>
        
        </div>

        <hr className='border'/>
            
            <div>
                {errorMessage && <p className="text-center text-red-500 font-semibold">Invalid Credentials</p>}
            </div>
            
            <div className='w-full'>
                <label htmlFor="username" className="block text-lg font-normal mx-7 mt-4">User Name</label>
                <input className="border-2 w-70 h-15 px-1 mx-7"  type="text" name="username" id="username" value={username}  onChange={handleUsername}/>
            </div>
            
            
            <button className="bg-green-500 rounded px-3 py-1 text-center my-2 mx-7" onClick={validate} >Login</button>

        
    </div>
  )
}

export default LoginComponent
