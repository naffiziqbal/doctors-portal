import React, { useContext } from "react";
import { AuthProvider } from "../../USerContext/UserContext";
import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

// const queryClient = new QueryClient();

const MyAppointment = () => {
  useTitle("My Appointment");
  const location = useLocation();
  const { user } = useContext(AuthProvider);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: userBooking = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(url, {
        headers: {
          authorization: ` bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  console.log(userBooking);

  return (
    <div>
      <p>All Appointment Goes Down Here</p>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {userBooking?.map((book, idx) => (
              <tr>
                <th key={book._id}>{idx + 1}</th>
                <td>{book.name}</td>
                <td>{book.treatment}</td>
                <td>{book.appointmentDate}</td>
                <td>{book.slot}</td>
                <td>
                  {book.price && !book.paid && (
                    <Link to={`/dashboard/payment/${book._id}`}>
                      {" "}
                      <button className=" btn  btn-primary mx-4">
                        Pay Now
                      </button>
                    </Link>
                  )}
                  {book.paid && (
                    <button disabled className="btn btn-xs">
                      Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
