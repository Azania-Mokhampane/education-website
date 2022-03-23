import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import About from "./components/about";
import LandingSection from "./components/landingSection";
import ContactUs from "./components/contact";
import BookATutor from "./components/bookATutor";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/landingSection" element={<LandingSection />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/bookATutor" element={<BookATutor />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
