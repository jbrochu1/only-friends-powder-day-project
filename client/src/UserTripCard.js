export default function UserTripCard({ users, user_trips, currentUser }) {
  const userTripIdMatch = user_trips.find(
    (userTrip) => currentUser.id === userTrip.user_id
  );
  // const userTripsInfo = user_trips.map(userTripInfo => {
  //     return (
  //         <div key={userTripInfo.id}>
  //             {userTripInfo.user.username}
  //             {/* {(currentUser.id === userTripInfo.id) ? <button onClick={handleUnjoin} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Unjoin</button> : null} */}
  //         </div>
  //     )
  // })
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
            className="btn btn-accent btn-xs ml-5"
          >
            Unjoin
          </button>
        ) : null}
      </div>
    );
  });

  //   userTripIdMatch()

  //   console.log('usersInfo')
  //   console.log(usersInfo)
  //   console.log('userTripsInfo')
  //   console.log(userTripsInfo)
//   console.log("userTripIdMatch");
//   console.log(userTripIdMatch);

  return <div className="p-2 my-2">{usersInfo}</div>;
}
