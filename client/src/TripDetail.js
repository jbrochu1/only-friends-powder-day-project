import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TripCard from "./TripCard";

export default function TripDetail({ currentUser, setIsVisible }) {
  const [trip, setTrip] = useState({
    user_id: "",
    mountain_id: "",
    trip_start: "2022-10-15T18:30:00.000Z",
    trip_end: "2022-10-15T18:30:00.000Z",
    comments: [],
    mountain: "",
    users: [],
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`/trips/${id}`)
      .then((r) => r.json())
      .then((trip) => {
        setTrip(trip);
      });
  }, []);
  // console.log('detail')
  // console.log(trip)
  return (
    <>
      <TripCard
        trip={trip}
        currentUser={currentUser}
        setIsVisible={setIsVisible}
      />
    </>
  );
}
