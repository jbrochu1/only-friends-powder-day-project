export default function TripCard({trip}) {
    const {mountain_id, user_id, trip_start, trip_end} = trip
    return (
        <div>
            <div>Trip: {mountain_id}</div>
            <div>Creator: {user_id}</div>
            <div>Start: {trip_start}</div>
            <div>End: {trip_end}</div>
        </div>        
    )
}