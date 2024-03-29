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
      <div className="navbar bg-primary text-primary-content">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary/75 rounded-box w-52"
            >
              <li>
                <button className="btn btn-ghost normal-case">
                  <Link to="/trips/new">Add Trip</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <button className="btn btn-ghost normal-case text-xl">
            <Link to="/">PowderDay</Link>
          </button>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            {/* FOR FUTURE - ADD AVATAR HERE AND SWAP WITH LABEL BELOW */}
            {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label> */}
            <label tabIndex={0} className="btn btn-ghost">
              {currentUser.username}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary/75 rounded-box w-52"
            >
              <li>
                <button className="btn btn-ghost normal-case">
                  <Link to="/users/:id">Edit Profile</Link>
                </button>
              </li>
              {currentUser.admin ? (<li>
                <button className="btn btn-ghost normal-case">
                  <Link to="/mountains/new">Add Mountain</Link>
                </button>
              </li>) : null}
              <li>
                <button
                  className="btn btn-ghost normal-case"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
