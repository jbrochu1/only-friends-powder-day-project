import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TripCard from "./TripCard";

export default function TripDetail({ currentUser, setIsVisible }) {
  const [trip, setTrip] = useState({
    id: 0,
    user_id: 0,
    mountain_id: 0,
    trip_start: "2022-10-15T18:30:00.000Z",
    trip_end: "2022-10-15T18:30:00.000Z",
    comments: [],
    mountain: {},
    users: [{
        id: 0,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        avatar: "",
        age: 0,
        neighborhood: "",
        admin: false,
    }],
    user_trips: [{
        user_id: 0,
        trip_id: 0,
        user: {
            id: 0,
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            avatar: "",
            age: 0,
            neighborhood: "",
            admin: false,
        }
    }],
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`/trips/${id}`)
      .then((r) => r.json())
      .then((trip) => {
        setTrip(trip);
      });
  }, []);

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
