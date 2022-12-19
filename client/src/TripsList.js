import TripCard from "./TripCard"

export default function TripsList({trips}) {

    const tripCard = trips.map(trip => {
        return <TripCard key={trip.id} trip={trip} />
    })

    console.log(trips)

    return(
        <>
            {tripCard}
        </>
    )
}