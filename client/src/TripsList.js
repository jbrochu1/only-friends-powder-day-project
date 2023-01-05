import TripCard from "./TripCard";

export default function TripsList({
  trips,
  currentUser,
  setIsVisible,
  isVisible,
}) {
  const tripCard = trips.map((trip) => {
    return (
      <TripCard
        key={trip.id}
        trip={trip}
        currentUser={currentUser}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    );
  });

  // console.log(trips)

  return (
    <div 
      // className="rounded-xl p-8 space-y-4 shadow-2xl bg-cover"
      className="auto-rows-min"
      >
      {tripCard}
    </div>
  );
}
