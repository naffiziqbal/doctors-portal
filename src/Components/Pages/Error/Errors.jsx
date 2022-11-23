import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthProvider } from "../../../USerContext/UserContext";

const Errors = () => {
  const { logOutUser } = useContext(AuthProvider);
  const err = useRouteError();
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="relative top-3/4 ">
      <div className="  ">
        <h2 className="text-red-500 text-5xl font-bold">404 Errro</h2>
        <p>{err.message}</p>
        <p>
          Please <button className="btn btn-xs" onClick={handleLogOut}>Log out</button>{" "}
          And Log Back In{" "}
        </p>
      </div>
    </div>
  );
};

export default Errors;
