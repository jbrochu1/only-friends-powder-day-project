import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";

function Login({ updateUser, error }) {
  const [formData, setFormData] = useState({
    username: "",
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
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
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
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://bluebirdbackcountry.com/wp-content/uploads/2021/03/5H2A4135-Edit-1024x683.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              
              Only Friends on Powder Day!
            </h1>
            <p className="mb-5">
              Heard the phrase "No friends on a powder day"? We encourage you to do the opposite! No friends left behind on a powder day (sunny days too!). Login or create an account to see how to join the fun!
            </p>
            <div className="p-2 max-w-lg">
              <form onSubmit={onSubmit}>
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
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <div>
                {error ? (
                  <div className="alert-error shadow-lg p-2 m-3 rounded-lg">
                    {error}
                  </div>
                ) : null}
              </div>
              <div>
                <button onClick={handleClick} className="btn btn-primary">
                  + Create Account
                </button>
              </div>
            </div>
            <div>
              {signupVisible ? <Signup updateUser={updateUser} /> : null}
            </div>
            <a href="https://www.loom.com/share/e787280116a24d7cac31abf2fa212162">
              <p>Only Friends-Powder Day - Features Preview - Watch Video</p>
              <img src="https://cdn.loom.com/sessions/thumbnails/e787280116a24d7cac31abf2fa212162-1675280406086-with-play.gif"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
