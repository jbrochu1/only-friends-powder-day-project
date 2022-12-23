import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";
import TripCard from "./TripCard";


export default function TripDetail({currentUser}) {
    const [trip, setTrip] = useState({})
    const {id, user_id, trip_start, trip_end, mountains, users} = trip
    const [errors, setErrors] = useState(false)

    // const { id } = useParams()
    const params = useParams()

    // const navigate = useNavigate()

    
    useEffect(() => {
        fetch(`/trips/${params.id}`)
            .then((res) => { 
                if(res.ok){
                    res.json().then(data => {
                        setTrip(data)
                        console.log(data)    
                    })
                } else {
                  console.log('error')
                  res.json().then(data => setErrors(data.error))
                }
              })
    }, []);
   
    console.log(trip);

    // return (
    //     <>
    //     <TripCard key={trip.id}  trip={trip} currentUser={currentUser} />
    //     </>
    // )

    function handleJoin() {
        fetch('/user_trips', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ trip_id: trip.id, user_id: currentUser.id })
        })
          .then(res => {
            if (res.ok) {
              res.json()
                // .then((newUserTrip) => { handleNewUserTrip(newUserTrip) })
            }
            else {
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
    
          })
      }
      
      const usersInfo = users?.map(userInfo => {
        <div key={userInfo.id}>
          {userInfo.first_name}
        </div>
        // return <PeopleJoining key={userInfo.id} userInfo={userInfo}/>
      })
      const mtnsInfo = mountains?.map(mtnInfo => {
      //   // return <Mountains key={mountainInfo.id} mountainInfo={mountainInfo}/>
        <div key={mtnInfo.id}>
          {mtnInfo.name}
        </div>
      })
        console.log(trip)

    return (
        <div className="rounded-xl p-8 space-y-4 shadow-2xl">
            {/* <div>Mountain Id: {mountain_id}</div> */}
            <div>Creator: {user_id}</div>
            <div>Start: {trip_start}</div>
            <div>End: {trip_end}</div>
            <div>Location: {mtnsInfo}</div>
            <div>People Joining: {usersInfo}</div>
            {/* <div>Comments: {comments.map(comment => <p>{comment.user.username}{comment.comment}</p>)}</div> */}
            <Comments key={trip.id} trip={trip} currentUser={currentUser} />
            {/* <Link to={`/trips/${id}`}><button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'> See More Details!</button></Link> */}
            <button onClick={handleJoin}className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Join Trip</button>
        </div>        
    )
}