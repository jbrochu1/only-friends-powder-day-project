import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddTrip({currentUser, updateUser}) {
    
    const [tripData, setTripData] = useState({
        // user_id: '',
        trip_start: '',
        trip_end: ''
        // mountain_id: ''
      })
      const [mtnTripData, setMtnTripData] = useState([
        // trip_id: '',
        // mountain_id: ''
      ])
      const [mountains, setMountains] = useState([])
      const [tripId, setTripId] = useState([])
      const [errors, setErrors] = useState([])
      const navigate = useNavigate
    
    
      // SETS FORMDATA FOR INPUT ELEMENTS BELOW
      const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setTripData({ ...tripData, [name]: value })
        setMtnTripData({...mtnTripData, [name]: value })
      }
    
      // PERSISTS NEW TRIP TO DATABASE & REFRESHES PAGE
  function onSubmit() {
    fetch('/trips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...tripData, user_id: currentUser.id })
    })
      .then(res => {
        if (res.ok) {
          res.json()
          // .then((newTrip) => { handleNewTrip(newTrip) })
          // setTripId(res.id)
          console.log(tripId);
          // throw "quotes"
          // setMtnTripData(mtnTripData.mountain_id)
          // setTripData(tripData)?
        } else {
          //Display errors
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          console.log("else")
          // throw "quotes"
        }
      })
      console.log(tripId)

      
      // fetch('/mountain_trips', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...mtnTripData, })
      //   // body: JSON.stringify({ ...formData, mountain_id: mtnId, user_id: currentUser.id })
      // })
      //   .then(res => {
      //     if (res.ok) {
      //       res.json();
      //       navigate('/');
      //     } else {
      //       //Display errors
      //       res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      //     }
      //   })
  }

      const fetchAuthorizedUser = () => {
        fetch('/authorized_user')
          .then((res) => {
            if(res.ok){
              res.json()
                .then((currentUser) => {
                  updateUser(currentUser)
                })
            }
          })
      }
    

    return (
        <>
        <div>
            <p className='text-2xl p-3'>Add New Trip</p>
        </div>
        <div className='p-2 max-w-lg'>
            { errors ? errors.map(e => <div>{e}</div>) : null}
            <form onSubmit={onSubmit} className='justify-center items-center'>
            <div className='p-2 space-x-2'>
                <label>
                    Mountain ID#
                </label>
                <input type='text' name='mountain_id' className='w-2/3 float-right' value={mtnTripData.mountain_id} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Start Date
                </label>
                <input type='text' name='trip_start' className='w-2/3 float-right' value={tripData.trip_start} onChange={handleChange} />
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    End Date
                </label>
                <input type='text' name='trip_end' className='w-2/3 float-right' value={tripData.trip_end} onChange={handleChange} />
                </div>
                
                <div className='p-5'>
                <input type='submit' value='Add Trip' className='p-3 shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold rounded'/>
                </div>
            </form>
            </div>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </>
    )
}