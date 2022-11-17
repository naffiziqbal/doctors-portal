import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingInfo from "../../BookingInfo/BookingInfo";
import AppoionementOptions from "./AppoionementOptions";

const AvailableAppointment = ({ selectedDay, letSelectedDay }) => {
  // const [appointmentOpt, setAppointmentOpt] = useState([]);
  const [treatment, setTreatment] = useState({});

  const {data:appointmentOpt = [], isLoading} = useQuery({
    queryKey: ["appointmentOpt"],
    queryFn: () => fetch(`http://localhost:5000/appointmentOptions`)
    .then(res => res.json())
  });
  // useEffect(() => {
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOpt(data));
  // }, []);
  return (
    <>
      <div>
        <p className="text-center text-secondary">
          {" "}
          Available Appointment on : {format(selectedDay, "PP")}
        </p>
      </div>
      <div className="appointmentOption grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {appointmentOpt?.map((option) => (
          <AppoionementOptions
            key={appointmentOpt?._id}
            option={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      <BookingInfo treatment={treatment} selectedDay={selectedDay} />
    </>
  );
};

export default AvailableAppointment;
