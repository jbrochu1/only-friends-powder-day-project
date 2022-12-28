import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TripCard from "./TripCard";


export default function TripDetail({currentUser, setIsVisible}) {
    const [trip, setTrip] = useState({
        comments: [],
        mountains: [],
        users: []
    })
    const [placeContents, setPlaceContents] = useState([])
    const { tripId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/trips/${tripId}`)
            .then((r) => r.json())
            .then((trip) => {
                setTrip(trip);
                // setIsVisible(false);
            });
    }, []);
   
    // console.log(trip)

    return (
        <>
        <TripCard trip={trip} currentUser={currentUser} setIsVisible={setIsVisible}/>
        </>
    )
}