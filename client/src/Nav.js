import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function Nav ({updateUser, currentUser}) {

    const navigate = useNavigate()

    const handleLogOut = () => {
        // DELETE `/logout`
        fetch('/logout',{
          method:'DELETE'
        })
        .then(res => {
          if(res.ok){
            updateUser(false)
            navigate(`/`)
          }
        })
      }

    return (
        <>
            
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={handleLogOut}>Log Out</button>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link to='/'>Home</Link></button>
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'><Link to='/trips/new'>Add Trip</Link></button>
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'><Link to='/users/:id'>Edit Profile</Link></button>
              
            
        </>
    )
} 