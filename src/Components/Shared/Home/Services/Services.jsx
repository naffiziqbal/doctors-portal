import React from "react";
import fluoride from "../.../../../../../assets/images/fluoride.png";
import cavity from "../.../../../../../assets/images/cavity.png";
import teeth from "../.../../../../../assets/images/whitening.png";
import Service from "./Service/Service";

const Services = () => {
  const services = [
    {
      id: 1,
      title: " Fluoride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est explicabo nihil reprehenderit! Impedit, voluptates quaerat necessitatibus eum quis sunt!",
      img: fluoride,
    },
    {
      id: 2,
      title: " Cavity Filling ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est explicabo nihil reprehenderit! Impedit, voluptates quaerat necessitatibus eum quis sunt!",
      img: cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est explicabo nihil reprehenderit! Impedit, voluptates quaerat necessitatibus eum quis sunt!",
      img: teeth,
    },
  ];
  return (
    <div className="">
      <div className="text-center mb-[70px]">
        <h3 className="text-primary text-xl">Our Services</h3>
        <h2 className="text-accent text-2xl">Services We Provide </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-11 text-center">
        {services.map((service) => (
          <Service service={service} key={services.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
