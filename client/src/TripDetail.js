import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TripCard from "./TripCard";


export default function TripDetail({currentUser}) {
    const [trip, setTrip] = useState({})
    const [placeContents, setPlaceContents] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/trips/${id}`)
            .then((r) => r.json())
            .then((trip) => {
                setTrip(trip);
            });
    }, []);
   
    console.log(trip)

    return (
        <>
        {/* <TripCard key={trip.id}  trip={trip} currentUser={currentUser} /> */}
        </>
    )
}