import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import ConfirmationModal from "../Shared/ConfiramationModal/ConfirmationModal";

const Allusers = () => {
  const [deleteUser, setDeleteUser] = useState(null);

  const closeModal = () => {
    setDeleteUser(null);
  };
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(" http://localhost:5000/users").then((res) => res.json()),
  });
  const hanldeMakeAdmin = (id) => {
    fetch(` http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert(" Successful");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>

                <td>
                  {user?.role !== "admin" && (
                    <button
                      className="btn btn-primary btn-xs"
                      onClick={() => hanldeMakeAdmin(user._id)}
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeleteUser(users)}
                    htmlFor="confirmation-modal"
                    className="btn btn-accent btn-xs"
                  >
                    Delete
                  </label>
                  <br />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteUser && (
        <ConfirmationModal
          title={`Are You Sure You Wants To Delete This User?`}
          // message = {`${title}`}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Allusers;
