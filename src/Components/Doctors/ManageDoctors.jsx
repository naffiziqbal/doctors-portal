import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../Loading";
import ConfirmationModal from "../Shared/ConfiramationModal/ConfirmationModal";

const ManageDoctors = () => {
  const [deleteDoc, setDeleteDoc] = useState(null);

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: () =>
      fetch(`http://localhost:5000/doctors`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  const closeModal = () => {
    setDeleteDoc(null);
  };
  const successAction = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 1) {
          refetch();
          alert(" Deleted Succesfully");
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl">Manage Doctors: {doctors.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Speciality</th>
              <th>Email</th>
              <th>Manage</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {doctors.map((doctor) => (
              <tr key={doctor._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={doctor.img} alt="Doctor" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{doctor.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {doctor.speciality}
                  <br />
                </td>
                <td> {doctor.email}</td>
                <th>
                  <label
                    onClick={() => setDeleteDoc(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-accent btn-xs"
                  >
                    Delete
                  </label>

                  {/* <button className="btn btn-accent btn-xs"></button> */}
                </th>
              </tr>
            ))}
            {/* <!-- row 2 --> */}
          </tbody>
          {/* <!-- foot --> */}
        </table>
      </div>
      {deleteDoc && (
        <ConfirmationModal
          title={`Are You Sure You Want To ${deleteDoc.name}`}
          message={` Once You've Deleted the Doctor There is no way reatur`}
          closeModal={closeModal}
          successAction={successAction}
          modalData={deleteDoc}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
