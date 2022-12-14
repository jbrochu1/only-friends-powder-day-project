import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


export default function Nav ({updateUser}) {

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
            {/* <button><Link to='/login'>Log In</Link></button> */}
            <button onClick={handleLogOut}>Log Out</button>
        </>
    )
} 