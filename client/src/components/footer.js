import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="relative pt-8 pb-6 ">
        <div className="flex flex-wrap text center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex place-items-center">
              <h5 className="text-2xl text-center">Useful Links</h5>
              <div className="">
                <div className="">
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex place-items-center ">
              <h5 className="text-2xl">Reach Out To Us</h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </>
  );
};

export default Footer;
