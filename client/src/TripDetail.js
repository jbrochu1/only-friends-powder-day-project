import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TripCard from "./TripCard";


export default function TripDetail({currentUser}) {
    const [trip, setTrip] = useState({
        comments: [],
        mountains: [],
        users: []
    })
    const [placeContents, setPlaceContents] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/trips/${id}`)
            .then((r) => r.json())
            .then((trip) => {
                setTrip(trip);
            });
    }, [id]);
   
    console.log(trip)

    return (
        <>
        <TripCard trip={trip} currentUser={currentUser} />
        </>
    )
}