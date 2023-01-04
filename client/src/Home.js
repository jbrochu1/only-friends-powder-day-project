import { useEffect, useState } from "react";
import TripsList from "./TripsList";

export default function Home({ currentUser, setIsVisible, isVisible }) {
  const [trips, setTrips] = useState([{
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
        id: 0,
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
  }]);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetch("/trips").then((res) => {
      if (res.ok) {
        res.json().then(setTrips).then(setIsVisible(true));
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  // console.log(trips)

  return (
    <>
      <TripsList
        trips={trips}
        currentUser={currentUser}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </>
  );
}
