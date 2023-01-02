import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Signup({updateUser}) {
    const [formData, setFormData] = useState([
        {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
            age: '',
            avatar: '',
            neighborhood: ''
        }
    ])
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const {username, password, email, first_name, last_name, age, avatar, neighborhood} = formData


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

      function onSubmit(e) {
        e.preventDefault()
        const newUser = {
            username,
            password,
            email,
            first_name,
            last_name,
            age,
            avatar,
            neighborhood    
        }
        fetch('/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...newUser})
        })
          .then(res => {
            if (res.ok) {
              res.json().then(user => {
                updateUser(user)
                navigate(`/`)
              })
            } else {
              //Display errors
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
          })
        }
    return (
        <>
        <div>
            <p className='text-2xl p-3'>New User Sign Up</p>
        </div>
        <div className='p-2 max-w-lg'>
        
            <form onSubmit={onSubmit} className='justify-center items-center'>
                <div className='p-2 space-x-2'>
                <label>
                    Username
                </label>
                <input type='text' name='username' className='w-2/3 float-right' value={username} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Email
                </label>
                <input type='text' name='email' className='w-2/3 float-right' value={email} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Password
                </label>
                <input type='password' name='password' className='w-2/3 float-right' placeholder="Password..." value={password} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    First Name
                </label>
                <input type='text' name='first_name' className='w-2/3 float-right' value={first_name} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Last Name
                </label>
                <input type='text' name='last_name' className='w-2/3 float-right' value={last_name} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Neighborhood
                </label>
                <input type='text' name='neighborhood'  className='w-1/2 float-right' value={neighborhood} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Age
                </label>
                <input type='text' name='age' className='w-2/3 float-right' value={age} onChange={handleChange} />
                </div>
                <div className='p-1'>
                <label>
                    Avatar Image
                </label>    
                </div>
                <div className='p-5'>
                <input type='text' name='avatar'  className='w-full float-right' value={avatar} onChange={handleChange} />
                </div>
                <div className='p-5'>
                <input type='submit' value='Sign Up' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'/>
                </div>
            </form>
            <div>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'><Link to='/'>Back to Login</Link></button>
                </div>    
            </div>
            { errors ? errors.map(err => <div>{ (err[0]) + ': ' + (err[1]) }</div>) : null }
            </>
    )
}