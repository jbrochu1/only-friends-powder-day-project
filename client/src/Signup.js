import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup({ updateUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    admin: false,
    first_name: "",
    last_name: "",
    age: "",
    avatar: "",
    neighborhood: "",
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const {
    username,
    password,
    email,
    first_name,
    last_name,
    age,
    avatar,
    neighborhood,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username,
      password,
      email,
      first_name,
      last_name,
      age: parseInt(formData.age),
      avatar,
      neighborhood,
    };

    console.log(newUser);

    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newUser }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
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

  return (
    <>
      <div>
        <div>
          <p className="text-2xl p-3">New User Sign Up</p>
        </div>
        <div className="p-2 max-w-lg">
          <form onSubmit={onSubmit}>
            <div className="">
              <div className="p-2">
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  className="input input-bordered input-primary w-1/2 text-neutral"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 space-x-2">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered input-primary w-1/2 text-neutral"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 space-x-2">
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered input-primary w-1/2 text-neutral"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 space-x-2">
                <input
                  type="text"
                  name="first_name"
                  placeholder="first name"
                  className="input input-bordered input-primary w-1/2 text-neutral"
                  value={first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 space-x-2">
                <input
                  type="text"
                  name="last_name"
                  placeholder="last name"
                  className="input input-bordered input-primary w-1/2 text-neutral"
                  value={last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 space-x-2">
                <input
                  type="text"
                  name="neighborhood"
                  placeholder="neighborhood"
                  className="input input-bordered input-primary w-1/2 text-neutral"
                  value={neighborhood}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 space-x-2">
                <input
                  type="text"
                  name="age"
                  placeholder="age"
                  className="input input-bordered input-primary w-1/2 text-neutral"
                  value={age}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2 space-x-2">
                <input
                  type="text"
                  name="avatar"
                  placeholder="avatar link"
                  className="input input-bordered input-primary w-full"
                  value={avatar}
                  onChange={handleChange}
                />
              </div>
              <div className="p-2">
                <input
                  type="submit"
                  value="Sign Up"
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
