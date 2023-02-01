export default function UserTripCard({ users, user_trips, currentUser }) {
  const userTripIdMatch = user_trips.find(
    (userTrip) => currentUser.id === userTrip.user_id
  );
  const handleUnjoin = () => {
    fetch(`/user_trips/${userTripIdMatch.id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  const usersInfo = users.map((user) => {
    return (
      <div key={user.id} className="my-3">
          {user.username} {'('}{user.first_name}  {user.last_name}{')'}

        {currentUser.id === user.id ? (
          <button
            onClick={handleUnjoin}
            className="btn btn-error btn-xs ml-5"
          >
            Unjoin
          </button>
        ) : null}
      </div>
    );
  });

  return <div className="p-2 my-2">{usersInfo}</div>;
}
