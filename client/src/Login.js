import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";

function Login({ updateUser, error }) {
  const [formData, setFormData] = useState({
    username: "",
    // email: '',
    password: "",
  });
  const [signupVisible, setSignupVisible] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  // DESTRUCTURE FORMDATA OBJECT
  const { username, password } = formData;

  // SENDS REQUEST TO GET USERS AND SET SESSIONS
  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      // email,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      // .then(console.log(user))
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            updateUser(user);
            navigate(`/`);
          });
        } else {
          res.json().then((json) => setErrors(json.errors));
        }
      });
  }

  // HANDLER FUNCTION SETS STATE FOR FORM DATA BASED ON INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = () => setSignupVisible(!signupVisible);

  return (
    <>
      <div className="p-2 max-w-lg">
        <form onSubmit={onSubmit}>
          <div className="p-2">
            <input
              type="text"
              name="username"
              placeholder="username"
              className="input input-bordered input-primary w-1/2"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 space-x-2">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered input-primary w-1/2"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 space-x-2">
            <input
              type="submit"
              value="Log In"
              className="btn btn-primary"
            />
          </div>
        </form>
        <div>{error ? <div className="alert alert-error shadow-lg p-2 m-3">{error}</div> : null}</div>
        <div>
          <button
            onClick={handleClick}
            className="btn btn-primary"
          >
            View Signup
          </button>
        </div>
      </div>
      <div>{signupVisible ? <Signup updateUser={updateUser} /> : null}</div>
    </>
  );
}

export default Login;
