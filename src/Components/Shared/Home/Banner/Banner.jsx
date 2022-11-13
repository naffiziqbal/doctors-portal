import React from "react";
import bannerImg from "../../../../assets/images/chair.png";
import bgImage from "../../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero bg-base-100 opacity-95 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            alt="Banner "
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
