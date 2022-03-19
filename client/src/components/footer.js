import React from "react";
import { Link } from "react-router-dom";
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoWhatsapp,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="relative text-white pt-8 pb-6 bg-gray-800 ">
        <div className="flex flex-wrap text center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div className="grid place-items-center">
              <h5 className="text-2xl text-center">Useful Links</h5>
              <div className="">
                <div className="text-center">
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
            <div className="grid place-items-center ">
              <h5 className="text-2xl text-center">Reach Out To Us</h5>
              <div className=" grid grid-rows-1 grid-flow-col gap-4">
                <button>
                  <a href="linkedin.com/in/azania-mokhampane-2728bb1a6">
                    <i>
                      <IoLogoLinkedin />
                    </i>
                  </a>
                </button>
                <button>
                  <a href="#">
                    <i>
                      <IoLogoFacebook />
                    </i>
                  </a>
                </button>
                <button>
                  <a href="#">
                    <i>
                      <IoLogoTwitter />
                    </i>
                  </a>
                </button>
                <button>
                  <a href="#">
                    <i>
                      <IoLogoYoutube />
                    </i>
                  </a>
                </button>
                <button>
                  <a href="#">
                    <i>
                      <IoLogoWhatsapp />
                    </i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-center">
            <p>
              Copyright © {new Date().getFullYear()} Azania Math Solutions.{" "}
              <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
