
import React from 'react'
import { useParams ,Link} from 'react-router-dom'

const WelcomeComponent = () => {

    const {username} = useParams()

  

  return (
    <div className='mx-auto max-w-2xl text-center'>
      <h1 className='mt-40 font-normal'>Welcome {username}</h1>

      <p className="font-normal">Your Todos <Link to="/todos" className="text-blue-500 underline font-semibold">Click Here</Link></p>

      
    </div>
  )
}

export default WelcomeComponent
