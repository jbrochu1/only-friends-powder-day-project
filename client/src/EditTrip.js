import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditTripForm from "./EditTripForm";

export default function EditTrip({ currentUser, updateUser }) {
  const [tripData, setTripData] = useState({
    id: "",
    user_id: "",
    trip_start: "",
    trip_end: "",
    // mountain_trips: [{id: "", trip_id: "", mountain_id: "", created_at: "", update_at: ""}],
    // mountains: [{id: "", address: "", blackout_dates: "", elevation: "", image: "", name: "", ski_pass: ""}],
    // comments: [],
    // users: [],
  });
  const [mtnTripData, setMtnTripData] = useState([
    // trip_id: '',
    // id: '',
    // mountain_id: ''
    {id: "", trip_id: "", mountain_id: "", created_at: "", update_at: ""}
  ]);
  const [errors, setErrors] = useState([]);
  //   const navigate = useNavigate
  const { id } = useParams();

  useEffect(() => {
    fetch(`/trips/${id}`)
      .then((r) => r.json())
      .then((Data) => {
        setTripData(Data);
        setMtnTripData(Data.mountain_trips);
        // setMtnTripData(mtnTripData);
      });
  }, []);

  return (
    <div>
      <EditTripForm mtnTripData={mtnTripData} tripData={tripData} />
    </div>
  );
}
