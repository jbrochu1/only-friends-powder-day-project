import { useState } from "react"
import { Link } from "react-router-dom"
import Comments from "./Comments"
import { format } from 'date-fns'
import UserTripCard from "./UserTripCard"



export default function TripCard({trip, currentUser, isVisible}) {
    const {id, user_id, trip_start, trip_end, mountain_id, users, mountain, user_trips} = trip
    const [errors, setErrors] = useState([])
    
    const creatorIdMatch = users.find((user) => (user.id === user_id))

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
            }
            else {
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
    
          })
      }
      const handleDelete = () => {
        fetch(`trips/${id}`, {
            method: 'DELETE',
        })
        window.location.reload();
      }

        
      // console.log(creatorIdMatch)
      // console.log(trip)

    return (
        <div className="rounded-xl p-8 space-y-4 shadow-2xl bg-cover">
          <div>
            <div>Location: {mountain.name}</div>
            <img src={mountain.image}></img>
            <div>
              <div>Start: {format(new Date(trip_start), 'E MM/dd/yyyy HH:mm aaa')}</div>
              <div>End: {format(new Date(trip_end), 'E MM/dd/yyyy HH:mm aaa')}</div>
              {/* <div>Creator: {users[0].username}</div> */}
              <div>Creator: {creatorIdMatch.username}</div>

              <div className="rounded-xl p-8 space-y-4 shadow-2xl">People Joining: <UserTripCard user_trips={user_trips} users={users} currentUser={currentUser}/> </div>
              <div>
                <Comments key={trip.id} trip={trip} currentUser={currentUser} />
                {isVisible ? <Link to={`/trips/${trip.id}`}><button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'> See More Details!</button></Link> : null}
                <button onClick={handleJoin}className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Join Trip</button>
                {(currentUser.id === trip.user_id ) ? <Link to={`/trips/${trip.id}/edit`}><button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'> Edit Trip</button></Link> : null}
                {(currentUser.id === trip.user_id ) ? <button onClick={handleDelete} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Delete</button> : null}
                {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
              </div>
            </div>
          </div>
        </div>        
    )
}