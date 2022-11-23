import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import useAdmin from "../hooks/useAdmin";
import { AuthProvider } from "../USerContext/UserContext";

const DashBoardLayout = () => {
  const { user } = useContext(AuthProvider);
  const [isAdmin] = useAdmin(user.email)

  // const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Header />
      <div className="drawer drawer-mobile">
        <input id="dash-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-2">
          <Outlet />
        </div>
        <div className="drawer-side shadow-2xl">
          <label htmlFor="dash-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content ">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to={"myappointment/"}>My Appointment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to={"allusers/"}>All Users</Link>
                </li>
                <li>
                  <Link to = '/dashboard/adddoctors'>Add Doctors</Link>
                </li>
                <li>
                  <Link to = '/dashboard/managedoctors'>Mange Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
