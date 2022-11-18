import React, { useContext } from "react";
import { AuthProvider } from "../../USerContext/UserContext";
import { useQuery } from "@tanstack/react-query";

// const queryClient = new QueryClient();

const MyAppointment = () => {
  const { user } = useContext(AuthProvider);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: userBooking = [] } = useQuery({
    queryKeys: ["bookings", user?.email],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
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
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {userBooking.map((book, idx) => ( 
              <tr >
                <th>{idx}</th>
                <td>{book.name}</td>
                <td>{book.treatment}</td>
                <td>{book.appointmentDate}</td>
                <td>{book.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;