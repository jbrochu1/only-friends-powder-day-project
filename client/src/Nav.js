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
            
              <button onClick={handleLogOut}>Log Out</button>
              <button className="btn btn-ghost normal-case text-xl"><Link to='/'>Home</Link></button>
              <button><Link to='/trips/new'>Add Trip</Link></button>
              <button><Link to='/users/:id'>Edit Profile</Link></button>
              
            
        </>
    )
} 