import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav({ updateUser, currentUser }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    // DELETE `/logout`
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        updateUser(false);
        navigate(`/`);
      }
    });
  };

  return (
    <div>
      {/* <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <button
            className="btn btn-ghost normal-case text-xl"
            onClick={handleLogOut}
          >
            Log Out
          </button>
          <button className="btn btn-ghost normal-case text-xl">
            <Link to="/">Home</Link>
          </button>
          <button className="btn btn-ghost normal-case text-xl">
            <Link to="/trips/new">Add Trip</Link>
          </button>
        </div>
        <div className="navbar-center text-4xl">
          <div>Only Friends On A Powder Day!</div>
        </div>
        <div className="navbar-end">
          <div>
            Welcome <br></br>
            {currentUser.username} !
          </div>
          <div></div>
        </div>
      </div> */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/trips/new">Add Trip</Link>
              </li>
              <li>
                <Link to="/users/:id">Edit Profile</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">PowderDay</Link>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            {/* FOR FUTURE - ADD AVATAR HERE */}
            {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label> */}
            <label tabIndex={0} className="btn btn-ghost">{currentUser.username}</label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-ghost normal-case">
              <Link to="/users/:id">Edit Profile</Link>
              </button> 
              </li>
              <li>
              <button
              className="btn btn-ghost normal-case"
              onClick={handleLogOut}
            >
              Log Out
            </button>
              </li>
              <li>
              
              </li>
            </ul>
          </div>
        </div>
        {/* <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/trips/new">Add Trip</Link>
            </li>
            <li>
              <Link to="/users/:id">Edit Profile</Link>
            </li>
          </ul> */}

        {/* <div className="navbar-end"> */}

        {/* <div>{currentUser.username}</div> */}
        {/* <button
              className="btn btn-ghost normal-case text-xl"
              onClick={handleLogOut}
            >
              Log Out
            </button> */}
      </div>
    </div>
  );
}
