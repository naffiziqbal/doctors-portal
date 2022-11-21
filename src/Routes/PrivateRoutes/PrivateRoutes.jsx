import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import { AuthProvider } from "../../USerContext/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading,setLoading } = useContext(AuthProvider);
  const location = useLocation()

  if (loading) {
    return <Loading/>
  }
  if (user?.uid) {
      return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoutes;
