import { useState } from "react"
import { Link } from "react-router-dom"
import Comments from "./Comments"
import { format, parseISO } from 'date-fns'



export default function TripCard({trip, currentUser, isVisible}) {
    const {id, user_id, trip_start, trip_end, mountain_id, users} = trip
    const [errors, setErrors] = useState([])
    // const mtnNames = mountains.map(mountain => name={mountain.name})
    
    function handleJoin() {
        fetch('/user_trips', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ trip_id: trip.id, user_id: currentUser.id })
        })
          .then(res => {
            if (res.ok) {
              res.json()
              window.location.reload()
                // .then((newUserTrip) => { handleNewUserTrip(newUserTrip) })
            }
            else {
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
    
          })
      }
      
      const usersInfo = users.map(userInfo => {
        return (
        <div key={userInfo.id}>
          {userInfo.first_name}
        </div>)
        
      })
      // const mtnsInfo = mountains.map(mtnInfo => {
      //   <div key={mtnInfo.id}>
      //     {mtnInfo.name}
      //   </div>
      // })

      // function dateIsValid(date) {
      //   return !Number.isNaN(new Date(date).getTime());
      // }
      // console.log(dateIsValid(trip_start));
      // console.log('card')
      // console.log(trip)
    return (
        <div className="rounded-xl p-8 space-y-4 shadow-2xl">
            {/* <div>Mountain Id: {mountain_id}</div> */}
            <div>Creator: {user_id}</div>
            <div>Start: {format(new Date(trip_start), 'E MM/dd/yyyy')}</div>
            <div>End: {format(new Date(trip_end), 'E MM/dd/yyyy')}</div>
            <div>Location: {mountain_id}</div>
            <div>People Joining: {usersInfo}</div>
            {/* <div>Comments: {comments.map(comment => <p>{comment.user.username}{comment.comment}</p>)}</div> */}
            <Comments key={trip.id} trip={trip} currentUser={currentUser} />
            {isVisible ? <Link to={`/trips/${trip.id}`}><button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'> See More Details!</button></Link> : null}
            <button onClick={handleJoin}className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Join Trip</button>
            {(currentUser.id === trip.user_id ) ? <Link to={`/trips/${trip.id}/edit`}><button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'> Edit Trip</button></Link> : null}
            {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>        
    )
}