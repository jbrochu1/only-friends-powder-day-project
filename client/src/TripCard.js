import { useState } from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import { format } from "date-fns";
import UserTripCard from "./UserTripCard";

export default function TripCard({ trip, currentUser, isVisible }) {
  const {
    id,
    user_id,
    trip_start,
    trip_end,
    mountain_id,
    users,
    mountain,
    user_trips,
  } = trip;
  const [errors, setErrors] = useState([]);

  const creatorIdMatch = users.find((user) => user.id === user_id);

  function handleJoin() {
    fetch("/user_trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trip_id: trip.id, user_id: currentUser.id }),
    }).then((res) => {
      if (res.ok) {
        res.json();
        window.location.reload();
      } else {
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  }
  const handleDelete = () => {
    fetch(`trips/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div className="card rounded-xl p-8 space-y-4 shadow-2xl bg-base-100 image-full">
      <figure>
        <img src={mountain.image} alt={mountain.name}></img>
      </figure>
      <div className="card-body">
        <div className="card-title text-2xl">Location: {mountain.name}</div>
        <div className="rounded-xl p-8 space-y-4 shadow-2xl">
          <div className="text-2xl">
            When:
          </div>
          <div>
            Start: {format(new Date(trip_start), "E MM/dd/yyyy hh:mm aaa")}
          </div>
          <div>End: {format(new Date(trip_end), "E MM/dd/yyyy hh:mm aaa")}</div>
          {/* <div>Creator: {users[0].username}</div> */}
        </div>
        <div className="rounded-xl p-8 space-y-4 shadow-2xl">
          <div className="text-2xl">
            Creator: {creatorIdMatch.username}
            </div>
            <div className="space-x-2">
            {currentUser.id === trip.user_id ? (
            <Link to={`/trips/${trip.id}/edit`}>
              <button className="btn btn-primary btn-xs">
                {" "}
                Edit Trip
              </button>
            </Link>
          ) : null}
          {currentUser.id === trip.user_id ? (
            <button
              onClick={handleDelete}
              className="btn btn-error btn-xs"
            >
              Delete
            </button>
          ) : null}
          </div>  

          <div>
            <div className="flex text-xl space-x-2">
              <div>People Joining:</div>
              <div><button
            onClick={handleJoin}
            className="btn btn-primary btn-xs"
          >
            Join Trip
          </button></div>
            </div>
            <UserTripCard
              user_trips={user_trips}
              users={users}
              currentUser={currentUser}
            />
          </div>
        </div>
        <div>
          <Comments key={trip.id} trip={trip} currentUser={currentUser} />
        </div>
        <div className="p-3 space-x-5">
          {isVisible ? (
            <Link to={`/trips/${trip.id}`}>
              <button className="btn btn-primary">
                {" "}
                More Info
              </button>
            </Link>
          ) : null}
          {errors
            ? errors.map((e) => (
                <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
