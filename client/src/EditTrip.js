import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DateTimePicker from 'react-datetime-picker'

export default function EditTrip({ currentUser, updateUser, mountains }) {
  // const [tripData, setTripData] = useState({
  //   id: "",
  //   user_id: "",
  //   trip_start: new Date,
  //   trip_end: new Date,
  //   mountain_id: "",
  // });

  const [tripStart, setTripStart] = useState(new Date)
  const [tripEnd, setTripEnd] = useState(new Date)
  const [mtnId, setMtnId] = useState({mountain_id: ''})
  const [errors, setErrors] = useState([]);
  //   const navigate = useNavigate
  const { id } = useParams();


  useEffect(() => {
    fetch(`/trips/${id}`)
      .then((r) => r.json())
      .then((Data) => {
        setMtnId(Data.mountain_id);
        setTripStart(new Date(Data.trip_start));
        setTripEnd(new Date(Data.trip_end));
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    // setTripData({ ...tripData, [name]: value })
    setMtnId({...mtnId, [name]: value })
  }

  function onSubmit() {
    fetch(`/trips/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        trip_start: tripStart,
        trip_end: tripEnd,
        mountain_id: mtnId.mountain_id
    })
    })
      .then(res => {
        if (res.ok) {
          res.json()
        } else {
          //Display errors
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
   
  }
  
    const mtns = mountains.map(mtn => {
      return (<option key={mtn.name} value={mtn.id}>{mtn.name}</option>)
    })

    console.log(mtnId)
    console.log(tripStart)
    console.log(tripEnd)


  return (
    <>
        <div>
            <p className='text-2xl p-3'>Edit Trip</p>
        </div>
        <div className='p-2 max-w-lg'>
            { errors ? errors.map(e => <div>{e}</div>) : null}
            <form onSubmit={onSubmit} className='justify-center items-center'>
            <div className='p-2 space-x-2'>
                <label>
                    Select Mountain
                </label>
                
                <select name="mountain_id" value={mtnId.mountain_id} onChange={handleChange} className='w-2/3 float-right'>
                {mtns}  
                </select>
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    Start Date
                </label>
                <DateTimePicker value={tripStart} onChange={setTripStart}/>
                {/* <input type='text' name='trip_start' className='w-2/3 float-right' value={tripData.trip_start} onChange={handleChange} /> */}
                </div>
                <div className='p-2 space-x-2'>
                <label>
                    End Date
                </label>
                <DateTimePicker value={tripEnd} onChange={setTripEnd}/>
                {/* <input type='text' name='trip_end' className='w-2/3 float-right' value={tripData.trip_end} onChange={handleChange} /> */}
                </div>
                
                <div className='p-5'>
                <input type='submit' value='Submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'/>
                </div>
            </form>
            </div>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </>  
  );
}
