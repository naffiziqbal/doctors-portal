import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import useTitle from "../../../hooks/useTitle";
import AppointmentPicker from "./AppointmentPicker";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  useTitle('Appointment')
  const [selectedDay, letSelectedDay] = useState(new Date());
  return (
    <div>
      <AppointmentPicker
        selectedDay={selectedDay}
        letSelectedDay={letSelectedDay}
      />
      <AvailableAppointment
        selectedDay={selectedDay}
        letSelectedDay={letSelectedDay}
      />
    </div>
  );
};

export default Appointment;
