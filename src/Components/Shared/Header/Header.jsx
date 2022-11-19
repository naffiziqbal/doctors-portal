import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../../USerContext/UserContext";

const Header = () => {
  const { user, logOutUser } = useContext(AuthProvider);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuitems = {
    publicMenus: (
      <>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/appointment"}>Appointment</Link>
        </li>
        <li>
          <Link to={"/reviews"}>Reviews</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        {!user?.uid ? (
          <>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        ) : (
          <li>
            <Link onClick={handleLogOut}>Log Out</Link>
          </li>
        )}
      </>
    ),
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuitems.publicMenus}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuitems.publicMenus}</ul>
        </div>
        {user?.uid && (
          <div className="navbar-end">
            <label
              htmlFor="dash-drawer"
              tabIndex={2}
              className="btn btn-ghost lg:hidden"
            >
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <p>{user?.email}</p>
            <img src={user?.photoURL} alt =' '/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
