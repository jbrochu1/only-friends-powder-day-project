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
    <div className="navbar bg-primary text-primary-content">
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
        <div>Welcome {currentUser.username} !</div>
        <div></div>
      </div>
    </div>
  );
}
