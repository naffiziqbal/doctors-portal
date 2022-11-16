import React from "react";

const BookingInfo = ({ treatment }) => {
  const { name, id, slots } = treatment;
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="booking_modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
