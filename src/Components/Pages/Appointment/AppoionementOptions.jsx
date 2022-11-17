import React from "react";

const AppoionementOptions = ({ option, setTreatment }) => {
  const { name, slots, _id } = option;

  return (
    <div className="shadow-lg text-center pb-5">
      <p className="text-2xl">{name}</p>
      <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
      <p>{slots.length > 1 ? "Spaces Available" : "Space Available "}</p>
      <label
        disabled={slots.length === 0}
        htmlFor="booking_modal"
        className="btn btn-primary text-zinc-100"
        onClick={() => setTreatment(option)}
      >
        Book Appointment
      </label>
    </div>
  );
};

export default AppoionementOptions;
