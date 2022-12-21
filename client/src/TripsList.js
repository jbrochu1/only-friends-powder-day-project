import TripCard from "./TripCard"

export default function TripsList({trips, currentUser}) {

    const tripCard = trips.map(trip => {
        return <TripCard key={trip.id} trip={trip} currentUser={currentUser} />
    })

    // console.log(trips)

    return(
        <>
            {tripCard}
        </>
    )
}
