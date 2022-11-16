import React from "react";

const AppoionementOptions = ({ option }) => {
    const { name, slots} = option
    console.log(slots);


  return (
    <div className="shadow-lg text-center">
      <p className="text-2xl">{name}</p>
      <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
      <p>{slots.length > 1 ? 'Spaces Available' : "Space Available "}</p>
      <button className="btn btn-primary">Book Appointment</button>
    </div>
  );
};

export default AppoionementOptions;
