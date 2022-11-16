import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import bannerImg from "../../../assets/images/chair.png";


const AppointmentPicker = ({selectedDay, letSelectedDay}) => {
  return (
    <div>
      <div className="hero bg-base-100 opacity-95 ">
        <div className="hero-content flex-col flex lg:flex-row md:flex-row gap-20">
          <div>
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={letSelectedDay}
            />
            <p>You have selected date : {format(selectedDay, "PP")}</p>
          </div>
          <img
            src={bannerImg}
            alt="Banner "
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentPicker;
