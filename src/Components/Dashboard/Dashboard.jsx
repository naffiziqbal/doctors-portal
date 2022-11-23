import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthProvider } from "../../USerContext/UserContext";
import InputModal from "../Shared/ConfiramationModal/InputModal/InputModal";

const Dashboard = () => {
  useTitle('Dashboard')
  const [updateUser, setUpdateUser] = useState(null);
  const { user } = useContext(AuthProvider);
  const {
    data: userData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () =>
      fetch(`http://localhost:5000/user?email=${user.email}`).then((res) =>
        res.json()
      ),
  });

  //   console.log(userData);

  return (
    <div className="flex justify-center items-center flex-col">
      <img src={user.photoURL} alt="" className="rounded-full max-w-sm" />
      <div className="info text-start">
        <div>
          Name : <strong>{user.displayName}</strong>
          <span>update name </span>
          <label
            htmlFor="inputModal"
            className="btn btn-accent btn-xs ml-12"
            onClick={() => setUpdateUser(userData)}
          >
            Update Data
          </label>
        </div>
        <p>
          Email : <strong> {user.email}</strong>
        </p>
        <p>Role : {userData?.role}</p>
      </div>
      <InputModal
        userData={userData}
        updateUser={updateUser}
        setUpdateUser={setUpdateUser}
      />
    </div>
  );
};

export default Dashboard;
