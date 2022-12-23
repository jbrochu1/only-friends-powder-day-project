import TripCard from "./TripCard"

export default function TripsList({trips, currentUser, setIsVisible, isVisible}) {

    const tripCard = trips.map(trip => {
        return <TripCard key={trip.id} trip={trip} currentUser={currentUser} isVisible={isVisible} setIsVisible={setIsVisible} />
    })

    // console.log(trips)

    return(
        <>
            {tripCard}
        </>
    )
}
