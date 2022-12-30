import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Signup from './Signup'

function Login({ updateUser, error }) {
    const [formData, setFormData] = useState({
        username: '',
        // email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    // DESTRUCTURE FORMDATA OBJECT
    const { username, password } = formData

    // SENDS REQUEST TO GET USERS AND SET SESSIONS
    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            // email,
            password
        }
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            // .then(console.log(user))
            .then((res) => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        navigate(`/home`)
                    })
                } else {
                    res.json()
                    .then(json => setErrors(json.errors))
                }
            })
    }

    // HANDLER FUNCTION SETS STATE FOR FORM DATA BASED ON INPUT
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
        <div className='p-2 max-w-lg'>
            <form onSubmit={onSubmit}>
                <div className='p-2'>
                <label>
                    Username
                </label>
                <input type='text' name='username' className='' value={username} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    {/* Email
                </label>
                <input type='text' name='email' className='w-2/3 float-right' value={email} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label> */}
                    Password
                </label>
                <input type='password' name='password' className='' value={password} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <input type='submit' value='Log In' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'/>
                </div>
            </form>
                <div>
                    { error ? <div>{error}</div> : null }
                </div>
                <div>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'><Link to='/users/new'>Signup</Link></button>
                </div>
            
        </div>
        </>
    )
}

export default Login;