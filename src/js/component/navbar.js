import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/")
    return (
      <nav className="navbar p-2 mb-2 mt-2 justify-content-end ">
        <div className="ml-auto">
          <Link to="/addContact">
            <button className="btn btn-success">Add new contact</button>
          </Link>
        </div>
      </nav>
    );
};
