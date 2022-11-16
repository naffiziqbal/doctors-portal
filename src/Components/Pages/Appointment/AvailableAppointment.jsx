import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoionementOptions from "./AppoionementOptions";

const AvailableAppointment = ({ selectedDay, letSelectedDay }) => {
  const [appointmentOpt, setAppointmentOpt] = useState([]);
  useEffect(() => {
    fetch(`appointmentOption.json`)
      .then((res) => res.json())
      .then((data) => setAppointmentOpt(data));
  }, []);
  return (
    <>
      <div>
        <p className="text-center text-secondary">
          {" "}
          Available Appointment on : {format(selectedDay, "PP")}
        </p>
      </div>
      <div className="appointmentOption grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {appointmentOpt.map((option) => (
          <AppoionementOptions key={appointmentOpt._id} option={option} />
        ))}
      </div>
    </>
  );
};

export default AvailableAppointment;
