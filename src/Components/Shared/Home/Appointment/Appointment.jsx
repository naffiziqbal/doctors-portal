import React from "react";
import doctorImg from "../../../../assets/images/doctor-small.png";
import appointmentBg from "../../../../assets/images/appointment.png";

const Appointment = () => {
  return (
    <div className="w-full" style={{ backgroundImage: `url(${appointmentBg})` }}>
      <div className=" flex text-base-100 ">
        <div className=" flex  flex-col lg:flex-row justify-evenly items-center    ">
          <img src={doctorImg} alt="Banner " className="max-w-sm" />
          <div className=" w-2/4">
            <h1 className="text-5xl font-bold w-3/4 ">
              Exceptional Dental Care, on Your Terms Based on Our Services
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
