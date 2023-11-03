import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../security/AuthProvider'

const LoginComponent = () => {

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState(false)

    const context = useAuth()
    

    const handleUsername = (e)=>
    {
        // console.log(e.target.value)
        setUsername(e.target.value)
        // console.log(username)
    }

    const handlePassword = (e)=>{
        // console.log(e.target.value)
        setPassword(e.target.value)
        
    }

    const validate = ()=>
    {
        if(context.validateUser(username,password))
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
                {errorMessage && <p className="text-center text-red-500 font-semibold">Invalid Credentials</p>}
            </div>
            
            <div>
                <label htmlFor="username" className="block text-lg font-normal">User Name</label>
                <input className="border-2 w-70 h-15 px-1" type="text" name="username" id="username" value={username}  onChange={handleUsername}/>
            </div>
            
            <div>
                <label htmlFor="password" className='block text-lg font-normal'>Password</label>
                <input className="border-2 w-70 h-15 px-1" type="password" name="password" id="password" value={password} onChange={handlePassword}/>
            </div>
            
            <button className="bg-green-500 rounded px-3 py-1 text-center my-2" onClick={validate} >Login</button>

        
    </div>
  )
}

export default LoginComponent
