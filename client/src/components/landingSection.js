import React from "react";

import "../styles/custom.css";

const LandingSection = () => {
  return (
    <>
      <div>
        <div className="p-5 flex flex-col items-center  justify-start font-sans min-h-96 bg-gray-300 lg:pt-10 lg:pb-20 landingpage-bgimage ">
          <div>
            <h1 className="pl-5 pt-12 text-5xl text-white ">
              Azania Math Solutions
            </h1>
          </div>
          <div>
            <h1 className="p-10 pl-5  text-white lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
              Why Struggle with Mathematics when you can just contact us and get
              <br />
              the best tutor who will help you reach your academic goals.
            </h1>
          </div>

          <div className=" flex flex-col items-center  h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
            <button className="cursor-pointer pt-2 pb-2 text-1xl rounded-full shadow-2xl lg:mr-5 hover:text-green-300  pl-3 pr-3 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white">
              Get A Tutor Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
