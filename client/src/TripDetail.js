import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TripCard from "./TripCard";


export default function TripDetail({currentUser, setIsVisible}) {
    const [trip, setTrip] = useState({
        comments: [],
        mountains: [],
        users: []
    })
    const [placeContents, setPlaceContents] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`/trips/${id}`)
            .then((r) => r.json())
            .then((trip) => {
                setTrip(trip);
                // setIsVisible(false);
            });
    }, []);
   
    return (
        <>
        <TripCard trip={trip} currentUser={currentUser} setIsVisible={setIsVisible}/>
        </>
    )
}