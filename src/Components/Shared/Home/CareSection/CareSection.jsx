import React from "react";
import careImg from "../../../../assets/images/treatment.png";

const CareSection = () => {
  return (
    <div className="hero bg-base-100  flex justify-evenly  p-16 ">
      <div className="hero-content flex  flex-col gap-24 lg:flex-row">
        <img
          src={careImg}
          alt="Banner "
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold w-3/4">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CareSection;
