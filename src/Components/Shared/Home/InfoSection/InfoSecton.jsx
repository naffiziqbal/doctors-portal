import React from "react";
import watch from '../../../../assets/icons/clock.svg'
import location from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'

const InfoSecton = () => {
  return (
    <div className="grid gap-5  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 my-[112px]">
      <div className="time border rounded-lg flex  items-center justify-evenly p-3 lg:flex-row md:flex-row flex-col bg-primary text-base-100">
        <img src={watch} alt="watch" />
        <p>Lorem, ipsum dolor sit amet co elit..</p>
      </div>
      <div className="location border rounded-lg flex  items-center justify-evenly lg:flex-row md:flex-row flex-col bg-accent text-base-200">
      <img src={location} alt="marker" />
        <p>Washington DC</p>
      </div>
      <div className="contact border rounded-lg flex  items-center justify-evenly lg:flex-row md:flex-row flex-col bg-primary text-base-100">
      <img src={phone} alt="watch" />
        <p>+880 14123435413</p>
      </div>
    </div>
  );
};

export default InfoSecton;
