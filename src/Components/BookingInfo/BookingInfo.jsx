import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthProvider } from "../../USerContext/UserContext";
import "./Appointment.css";
const BookingInfo = ({ treatment, selectedDay, refetch }) => {
  const { user } = useContext(AuthProvider);
  const { name, id, slots,price } = treatment;

  const date = format(selectedDay, "PP");

  const handleModlaData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const bookingInfo = {
      name,
      treatment: treatment?.name,
      appointmentDate: date,
      email,
      slot,
      phone,
      price : treatment.price
    };

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('Data Submitted')
          refetch(); //Set Data  Automatically
        } else {
          alert(data.message);
        }
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle text-center">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <form className="booking_form text-center" onSubmit={handleModlaData}>
            <input
              type="text"
              value={date}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Who shot first?
              </option>
              {slots?.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="email"
              name="email"
              value={user?.uid ? user?.email : ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="name"
              name="name"
              placeholder=" Enter Your Name "
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder=" Enter Your Phone "
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <div className="modal-action">
              <label
                htmlFor="booking_modal"
                className="btn w-full
              "
              >
                <input type="submit" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
