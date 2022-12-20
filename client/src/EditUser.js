export default function EditUser() {
    return (
        <>
        <div>
            <p className='text-2xl p-3'>Edit Profile</p>
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
                    Location (State)
                </label>
                <input type='text' name='location'  className='w-1/2 float-right' value={location} onChange={handleChange} />
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
                <input type='text' name='avatar_img'  className='w-full float-right' value={avatar_img} onChange={handleChange} />
                </div>
                <div className='p-5'>
                <input type='submit' value='Sign Up' className='p-3 shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold rounded'/>
                </div>
            </form>
            </div>
            { errors ? errors.map(err => <div>{ (err[0]) + ': ' + (err[1]) }</div>) : null }
        </>
    )
}