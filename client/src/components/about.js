import React from "react";
import NavBar from "./navbar";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="p-5   flex flex-col  items-center justify-start font-sans min-h-96 bg-gray-500 lg:pt-10 lg:pb-20">
        <div className="p-5 text-5xl text-white ">
          <h1>
            <u>About</u> Us
          </h1>
        </div>
        <div className="lg:pl-24 lg:pr-24">
          <div className=" p-5 text-white box-content h-fit w-fit p-5 border-solid  border-4 border-gray-800 rounded ">
            <p className="">
              Azania Math Solutions is a small business intended to help every
              individual who needs assisstane with Mathematics to improve their
              grades. We are of the companies with best tutors who does not use
              a single method for teaching candidates as people do not have the
              same level of understading. At Azania Math Solutions we take those
              kinds of things into consideration and teach or help different
              individuals who has different needs with different teaching styles
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
