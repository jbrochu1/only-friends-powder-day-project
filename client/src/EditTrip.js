import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";

export default function EditTrip({ currentUser, mountains, setMountains }) {
  const [tripStart, setTripStart] = useState(new Date());
  const [tripEnd, setTripEnd] = useState(new Date());
  const [mtnId, setMtnId] = useState({ mountain_id: 0 });
  const [tripOwner, setTripOwner] = useState(0);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch("/mountains").then((res) => {
      if (res.ok) {
        res.json().then((mtns) => {
          setMountains(mtns);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch(`/trips/${id}`)
      .then((r) => r.json())
      .then((Data) => {
        setMtnId(Data.mountain_id);
        setTripStart(new Date(Data.trip_start));
        setTripEnd(new Date(Data.trip_end));
        setTripOwner(Data.user_id);
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // setTripData({ ...tripData, [name]: value })
    setMtnId({ ...mtnId, [name]: value });
  };

  function onSubmit() {
    fetch(`/trips/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        trip_start: tripStart,
        trip_end: tripEnd,
        mountain_id: mtnId.mountain_id,
      }),
    })
      .then(navigate(`/`))
      .then((res) => {
        if (res.ok) {
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
            <h1 className="text-5xl font-bold">Edit Trip</h1>
            <p className="py-6">Make some changes here, life can be hectic</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {currentUser.id === tripOwner ? (
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
                      <label>Start Date</label>
                      <div>
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
                        value="Submit"
                        className="btn btn-primary"
                      />
                    </div>
                  </form>
                </div>
              ) : (
                <div>
                  You are not authorized to update this trip, must be the
                  original creator
                </div>
              )}
              {errors
                ? errors.map((e) => (
                    <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
