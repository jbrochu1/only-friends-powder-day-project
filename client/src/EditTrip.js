import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTrip({ currentUser, updateUser }) {
  const [tripData, setTripData] = useState({
    id: "",
    user_id: "",
    trip_start: "",
    trip_end: "",
    mountain_id: "",
  });
  // const [mtnTripData, setMtnTripData] = useState([
  //   {id: "", trip_id: "", mountain_id: "", created_at: "", update_at: ""}
  // ]);
  const [errors, setErrors] = useState([]);
  //   const navigate = useNavigate
  const { id } = useParams();


  useEffect(() => {
    fetch(`/trips/${id}`)
      .then((r) => r.json())
      .then((Data) => {
        setTripData(Data);
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setTripData({ ...tripData, [name]: value })
  }

  function onSubmit() {
    fetch(`/trips/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        trip_start: tripData.trip_start,
        trip_end: tripData.trip_end,
        mountain_id: tripData.mountain_id
    })
    })
      .then(res => {
        if (res.ok) {
          res.json()
        //   .then((res)=>setTripId(res.id)) 
        } else {
          //Display errors
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
   
  }   
            console.log(tripData)


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
                    Mountain ID#
                </label>
                {/* {mtnTrips} */}
                <input type='text' name='mountain_id' className='w-2/3 float-right' value={tripData.mountain_id} onChange={handleChange} />
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
                <input type='submit' value='Submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'/>
                </div>
            </form>
            </div>
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </>  
  );
}
