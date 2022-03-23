import React from "react";
import { Link } from "react-router-dom";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

import "../styles/custom.css";

const Footer = () => {
  return (
    <>
      <div className="relative text-white pt-8 pb-6 bg-gray-800 ">
        <div className="flex flex-wrap text center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div className="grid place-items-center">
              <h5 className="text-xl font-semibold text-center">
                Useful Links
              </h5>
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
            <div className="social grid place-items-center ">
              <h5 className="text-xl font-semibold text-center">
                Reach Out To Us
              </h5>
              <div className="grid grid-rows-1 grid-flow-col gap-6 pt-10 pb-5">
                <button className="">
                  <a href="https://linkedin.com/in/azania-mokhampane-2728bb1a6">
                    <i className="">
                      <LinkedInIcon />
                    </i>
                  </a>
                </button>
                <button>
                  <a href="https://linkedin.com/in/azania-mokhampane-2728bb1a6">
                    <i>
                      <FacebookIcon />
                    </i>
                  </a>
                </button>
                {/* <button>
                  <a href="#">
                    <i>
                      <TwitterRoundedIcon />
                    </i>
                  </a>
                </button> */}
                <button>
                  <a href="https://linkedin.com/in/azania-mokhampane-2728bb1a6">
                    <i>
                      <YouTubeIcon />
                    </i>
                  </a>
                </button>
                <button>
                  <a href="https://api.whatsapp.com/send?phone=+27691456585">
                    <i>
                      <WhatsAppIcon />
                    </i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-center text-xs ">
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
