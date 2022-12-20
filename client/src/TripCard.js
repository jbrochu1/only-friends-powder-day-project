export default function TripCard({trip}) {
    const {user_id, trip_start, trip_end, mountains, users} = trip
    // const mtnNames = mountains.map(mountain => name={mountain.name})

    return (
        <div>
            {/* <div>Mountain Id: {mountain_id}</div> */}
            <div>Creator: {user_id}</div>
            <div>Start: {trip_start}</div>
            <div>End: {trip_end}</div>
            <div>Location: {mountains.map(mtnInfo => <p>{mtnInfo.name}</p>)}</div>
        </div>        
    )
}