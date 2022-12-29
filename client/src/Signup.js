import { useState } from "react"

export default function Signup() {
    const [newUser, setNewUser] = useState([
        {
            username:'',
            email:'',
            first_name:'',
            last_name:'',
            age:'',
            avatar:'',
            neighberhood:''
        }
    ])
    const [errors, setErrors] = useState([])



    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setNewUser({ ...newUser, [name]: value })
      }

      function onSubmit() {
        fetch('/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...newUser})
        })
          .then(res => {
            if (res.ok) {
              res.json()
              
              // .then((newTrip) => { handleNewTrip(newTrip) })
              // setTripId(res.id)
              // throw "quotes"
              // setMtnTripData(mtnTripData.mountain_id)
              // setTripData(tripData)?
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
                <input type='text' name='username' className='w-2/3 float-right' value={newUser.username} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Email
                </label>
                <input type='text' name='email' className='w-2/3 float-right' value={newUser.email} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Password
                </label>
                <input type='password' name='password' className='w-2/3 float-right' placeholder="Password..." value={newUser.password} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    First Name
                </label>
                <input type='text' name='first_name' className='w-2/3 float-right' value={newUser.first_name} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Last Name
                </label>
                <input type='text' name='last_name' className='w-2/3 float-right' value={newUser.last_name} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Location (State)
                </label>
                <input type='text' name='location'  className='w-1/2 float-right' value={newUser.location} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Age
                </label>
                <input type='text' name='age' className='w-2/3 float-right' value={newUser.age} onChange={handleChange} />
                </div>
                <div className='p-1'>
                <label>
                    Avatar Image
                </label>
                </div>
                <div className='p-5'>
                <input type='text' name='avatar_img'  className='w-full float-right' value={newUser.avatar_img} onChange={handleChange} />
                </div>
                <div className='p-5'>
                <input type='submit' value='Sign Up' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'/>
                </div>
            </form>
                
            </div>
            { errors ? errors.map(err => <div>{ (err[0]) + ': ' + (err[1]) }</div>) : null }
            </>
    )
}