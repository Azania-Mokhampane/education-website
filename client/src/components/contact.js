import React, { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

import "../styles/custom.css";
import "./contact.css";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <NavBar />
      <br />
      <h1 className="pt-12">Contact Us Today to get a tutor</h1>
      <br />
      <br />
      <form>
        <input
          className="input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          type="text"
          name="firstName"
          required
        />
        <input
          className="input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />

        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <Footer />
    </>
  );
};

export default ContactUs;
