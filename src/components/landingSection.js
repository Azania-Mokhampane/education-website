import React from "react";
import { Link } from "react-router-dom";

import "../styles/custom.css";

const LandingSection = () => {
  return (
    <>
      <div>
        <div className="p-5 flex flex-col   justify-start font-sans min-h-96 bg-gray-300 lg:pt-10 lg:pb-20 landingpage-bgimage ">
          <div>
            <h1 className=" pt-12 text-5xl text-white ">
              Azania Math Solutions
            </h1>
          </div>
          <div>
            <h1 className="p-10 pl-0 text-white lg:mx-auto lg:text-gray-100">
              Why Struggle with Mathematics when you can just contact us and get{" "}
              <br />
              the best tutor who will help you reach your academic goals.
            </h1>
          </div>

          <div className=" flex flex-col items-center h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
            <button className="cursor-pointer pt-2 pb-2 text-1xl rounded-full shadow-2xl lg:mr-5 hover:text-green-300  pl-3 pr-3  focus:outline-none  font-medium text-gray-50 bg-opacity-0 ring-2 ring-white">
              <Link to="/bookATutor">Get A Tutor Today</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
