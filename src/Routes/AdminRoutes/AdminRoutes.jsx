import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { AuthProvider } from "../../USerContext/UserContext";

const AdminRoutes = ({ children }) => {
  const { user, loading, setLoading } = useContext(AuthProvider);
  const [isAdmin, isAdminLoader] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoader) {
    return <div> Loading </div>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default AdminRoutes;
