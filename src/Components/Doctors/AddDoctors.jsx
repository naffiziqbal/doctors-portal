import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Loading from "../Loading";

const AddDoctors = () => {
  useTitle('Add Doctors')
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const {
    data: appointmentData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentData"],
    queryFn: () =>
      fetch("http://localhost:5000/appointmentData").then((res) => res.json()),
  });
  const imgHostKey = process.env.REACT_APP_IMGBB_API_KEY;

  const handleDoctor = (data) => {
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log();
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: imgData.data.url,
          };
          // console.log(doctor);

          fetch(`http://localhost:5000/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                alert("Doctor Added");
                navigate('/dashboard/managedoctors')
              }
              console.log(data);
            });
        }
      });

      console.log(formData);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <h3 className="text-3xl">Add a New Doctor</h3>
        <div className=" flex h-[600px] w-3/4 items-center justify-center flex-col shadow-lg rounded-lg">
          <form onSubmit={handleSubmit(handleDoctor)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                className="input input-bordered w-full max-w-xs"
                {...register("name")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: "Email is Required",
                })}
              />

              <p className="text-red-600">
                {errors.email && errors.email.message}
              </p>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span>Speciality</span>
              </label>
              <select
                {...register("speciality")}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled>Pick A Speciality ?</option>
                {appointmentData.map((speciality) => (
                  <option key={speciality._id}>{speciality.name}</option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("image")}
              />
            </div>
            {isLoading ? (
              <Loading />
            ) : (
              <input
                type="submit"
                className="btn btn-primary mt-5 w-full text-white"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
