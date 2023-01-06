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
  console.log(trip)
  useEffect(() => {
    fetch(`/trips/${id}`)
      .then((r) => r.json())
      .then((trip) => {
        setTrip(trip);
      });
  }, []);

  return (
    <div className="my-10">
      
      <div className="card bg-primary/80 text-primary-content text-xl text-center p-5">
        <div className="text-4xl text-bold">Mountain Info</div>
        <div>
          Name: {trip.mountain.name}
        </div>
        <div>
          Blackout Dates: {trip.mountain.blackout_dates}
        </div>
        <div>
          Ski Pass: {trip.mountain.ski_pass}
        </div>
        <div>
          Elevation: {trip.mountain.elevation}
        </div>
      </div>
      <div className="">
      <TripCard
        trip={trip}
        currentUser={currentUser}
        setIsVisible={setIsVisible}
      />
      </div>
    </div>
  );
}
