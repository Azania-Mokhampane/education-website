import React from "react";
import { Link } from "react-router-dom";

import "../styles/custom.css";

const LandingSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-8 min-h-screen ">
        <div className="flex flex-col flex-1 items-center justify-center space-y-5 md:space-y-10 w-full">
          <h2 className="leading-tight font-semibold text-3xl md:text-5xl">
            <p className="text-white.400">Azania Math Solutions!</p>
          </h2>
          <p className="text-gray-400">
            Why Struggle with Mathematics when you can just contact us and get{" "}
            <br />
            the best tutor who will help you reach your academic goals.
          </p>
          <div className="flex flex-col md:flex-row ">
            <button className="rounded-full text-gray-800 text-lg font-normal py-3 px-6 bg-blue-400 hover:bg-blue-500">
              <Link to="/bookATutor">Get A Tutor Today</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center relative w-full">
          <div className="relative h-78 md:h-105 rounded-2xl shadow-2xl w-full truncate">
            <img
              className="items-center w-full h-full"
              alt="A teacher"
              src="img/teaching02.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
