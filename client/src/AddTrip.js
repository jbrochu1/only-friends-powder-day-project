import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";

export default function AddTrip({ currentUser, mountains }) {
  const [tripStart, setTripStart] = useState(new Date());
  const [tripEnd, setTripEnd] = useState(new Date());
  const [mtnId, setMtnId] = useState({ mountain_id: "" });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  // SETS FORMDATA FOR INPUT ELEMENTS BELOW
  const handleChange = (e) => {
    // e.preventDefault()
    const { name, value } = e.target;
    // setTripData({ ...tripData, [name]: value })
    // setTripStart({...tripStart, [name]: value })
    // setTripEnd({...tripEnd, [name]: value })
    setMtnId({ ...mtnId, [name]: value });
  };

  // PERSISTS NEW TRIP TO DATABASE & REFRESHES PAGE
  function onSubmit() {
    fetch("/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        trip_start: tripStart,
        trip_end: tripEnd,
        mountain_id: mtnId.mountain_id,
        user_id: currentUser.id,
      }),
    })
      .then(navigate(`/`))
      .then((res) => {
        if (res.ok) {
          res.json();
        } else {
          //Display errors
          res
            .json()
            .then((data) =>
              setErrors(
                Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`)
              )
            );
        }
      });
  }

  const mtns = mountains.map((mtn) => {
    return (
      <option key={mtn.name} value={mtn.id}>
        {mtn.name}
      </option>
    );
  });

  return (
    <div>
      <div>
        <p className="text-2xl p-3">Add New Trip</p>
      </div>
      <div className="p-2">
        {errors ? errors.map((e) => <div>{e}</div>) : null}
        <form onSubmit={onSubmit} className="justify-center items-center">
          <div className="p-2 space-x-2">
            <label>Select Mountain</label>
            <br></br>
            <select
              name="mountain_id"
              value={mtnId.mountain_id}
              onChange={handleChange}
              className="select select-primary w-2/3 max-w-xs"
            >
              <option>select one</option>
              {mtns}
            </select>
          </div>
          <div className="p-2 space-x-2">
            <label className="">Start Date</label>
            <div className="">
              <DateTimePicker value={tripStart} onChange={setTripStart} />
            </div>
          </div>
          <div className="p-2 space-x-2">
            <label>End Date</label>
            <div>
              <DateTimePicker value={tripEnd} onChange={setTripEnd} />
            </div>
          </div>

          <div className="p-5">
            <input
              type="submit"
              value="Add Trip"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            />
          </div>
        </form>
      </div>
      {errors
        ? errors.map((e) => <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2>)
        : null}
    </div>
  );
}
