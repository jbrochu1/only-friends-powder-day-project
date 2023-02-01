import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMountain({currentUser, addMtn}){
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        elevation: 0,
        ski_pass: "",
        blackout_dates: ""
      });
      const [errors, setErrors] = useState([]);
      const navigate = useNavigate();
      const {
        name,
        image,
        elevation,
        ski_pass,
        blackout_dates,
      } = formData;
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      function onSubmit(e) {
        e.preventDefault();
        const newMtn = {
            name,
            image,
            elevation,
            ski_pass,
            blackout_dates,
        };
        
        //POST NEW MOUNTAIN
        
        fetch("/mountains", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...newMtn }),
        }).then((res) => {
          if (res.ok) {
            res.json().then((mtn) => {
              addMtn(mtn);
              navigate(`/`);
            });
          } else {
            //Display errors
            res
              .json()
              .then((data) =>
                setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
              );
          }
        });
      }
    
      // console.log(formData)
      return (
        <>
          <div>
            <div>
              <p className="text-2xl p-3">Add New Mountain</p>
            </div>
            <div className="p-2 max-w-lg">
              <form onSubmit={onSubmit}>
                <div className="">
                  <div className="p-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered input-primary w-1/2 text-neutral"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-2 space-x-2">
                    <input
                      type="text"
                      name="image"
                      placeholder="image"
                      className="input input-bordered input-primary w-1/2 text-neutral"
                      value={image}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-2 space-x-2">
                    <input
                      type="text"
                      name="elevation"
                      placeholder="elevation"
                      className="input input-bordered input-primary w-1/2 text-neutral"
                      value={elevation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-2 space-x-2">
                    <input
                      type="text"
                      name="ski_pass"
                      placeholder="ski_pass"
                      className="input input-bordered input-primary w-1/2 text-neutral"
                      value={ski_pass}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-2 space-x-2">
                    <input
                      type="text"
                      name="blackout_dates"
                      placeholder="blackout_dates"
                      className="input input-bordered input-primary w-1/2 text-neutral"
                      value={blackout_dates}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="submit"
                      value="Create"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
            {errors
              ? errors.map((err) => <div>{err[0] + ": " + err[1]}</div>)
              : null}
          </div>
        </>
      );
}