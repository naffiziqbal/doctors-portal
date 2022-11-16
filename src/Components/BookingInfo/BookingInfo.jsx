import { format } from "date-fns";
import React from "react";
import "./Appointment.css";
const BookingInfo = ({ treatment, selectedDay }) => {
  const { name, id, slots } = treatment;
  const date = format(selectedDay, "PP");
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <form className="booking_form">
            <input
              type="text"
              value={date}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Who shot first?
              </option>
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <div className=" modal-action text-center">
              <label htmlFor="booking_modal" className="btn " type="submit">
                Submit
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
