import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";

export default function AddTrip({ currentUser, mountains, setMountains }) {
  const [tripStart, setTripStart] = useState(new Date());
  const [tripEnd, setTripEnd] = useState(new Date());
  const [mtnId, setMtnId] = useState({ mountain_id: "" });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  fetch("/mountains").then((res) => {
    if (res.ok) {
      res.json().then((mtns) => {
        setMountains(mtns);
      });
    }
  });
}, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMtnId({ ...mtnId, [name]: value });
  };

  
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
  // MAPS MOUNTAIN NAMES TO POPULATE OPTIONS FOR SELECT IN FORM
  const mtns = mountains.map((mtn) => {
    return (
      <option key={mtn.name} value={mtn.id}>
        {mtn.name}
      </option>
    );
  });

  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Add New Trip</h1>
              <p className="py-6">The first step to making it happen can be putting it on the calendar</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body"></div>
              <div className="p-2">
                {errors ? errors.map((e) => <div>{e}</div>) : null}
                <form
                  onSubmit={onSubmit}
                  className="justify-center items-center"
                >
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
                      <DateTimePicker
                        value={tripStart}
                        onChange={setTripStart}
                      />
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
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
              {errors
                ? errors.map((e) => (
                    <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2>
                  ))
                : null}
            </div>
          </div>
        </div>
      
    </div>
  );
}
