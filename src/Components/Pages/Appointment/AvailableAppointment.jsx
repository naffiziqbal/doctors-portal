import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingInfo from "../../BookingInfo/BookingInfo";
import AppoionementOptions from "./AppoionementOptions";

const AvailableAppointment = ({ selectedDay, letSelectedDay }) => {
  const [appointmentOpt, setAppointmentOpt] = useState([]);
  const [ treatment , setTreatment] = useState({})
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
          <AppoionementOptions key={appointmentOpt._id} option={option} 
          setTreatment={setTreatment}
          />
        ))}
      </div>
      <BookingInfo
      treatment={treatment}
      />
    </>
  );
};

export default AvailableAppointment;
