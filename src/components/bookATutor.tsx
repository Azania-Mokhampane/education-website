import React, { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import BookingButton from "./bookButton";
import {
  useColorModeValue,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import ReCaptcha from "./recaptcha";

import "../styles/custom.css";

const BookATutor = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const formBackground = useColorModeValue("gray.300", "gray.900");
  const [bookingInfo, setBookingInfo] = useState({
    userName: "",
    surname: "",
    userEmail: "",
    education: "Level Of Education",
    location: "Province",
  });

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onOpen();
  };
  return (
    <>
      <div className="h-screen">
        <NavBar />
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("You have add a your name"),
          })}
          validate={(values) => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => {
            return (
              <>
                <h1 className="pt-20 text-center text-3xl font-medium  leading-10">
                  Book A Tutor Today
                </h1>
                <div className="flex items-center justify-center m-5">
                  <form
                    style={{ width: "auto", height: "auto" }}
                    onSubmit={submitHandler}
                  >
                    <Box
                      className="flex flex-col p-12 rounded-md"
                      bgColor={formBackground}
                    >
                      <h2 className="text-3xl font-bold mb-6">
                        Personal Information
                      </h2>
                      <input
                        className="overflow-hidden mb-3 rounded-md p-2 h-10 "
                        value={bookingInfo.userName}
                        id="name"
                        placeholder="Name"
                        onChange={(e) =>
                          setBookingInfo({
                            ...bookingInfo,
                            userName: e.target.value,
                          })
                        }
                        type="text"
                        required
                      />
                      <input
                        className="overflow-hidden mb-3 rounded-md p-2 h-10 "
                        value={bookingInfo.surname}
                        id="surname"
                        placeholder="Surname"
                        type="text"
                        onChange={(e) =>
                          setBookingInfo({
                            ...bookingInfo,
                            surname: e.target.value,
                          })
                        }
                        required
                      />
                      <input
                        className="overflow-hidden mb-3 rounded-md p-2 h-10 "
                        value={bookingInfo.userEmail}
                        id="email"
                        placeholder="Enter Email Address"
                        type="email"
                        onChange={(e) =>
                          setBookingInfo({
                            ...bookingInfo,
                            userEmail: e.target.value,
                          })
                        }
                        required
                      />
                      <select
                        className="form-select overflow-hidden mb-3 rounded-md p-2 h-10 "
                        value={bookingInfo.education}
                        placeholder="Level of Education"
                        onChange={(e) =>
                          setBookingInfo({
                            ...bookingInfo,
                            education: e.target.value,
                          })
                        }
                      >
                        <option value="option1">Primary</option>
                        <option value="option2">Secondary</option>
                        <option value="option3">Tertiary</option>
                      </select>

                      <select
                        className="form-select overflow-hidden mb-3 rounded-md p-2 h-10 "
                        value={bookingInfo.location}
                        placeholder="Province"
                        // variant="filled"
                        // mb={3}
                        onChange={(e) =>
                          setBookingInfo({
                            ...bookingInfo,
                            location: e.target.value,
                          })
                        }
                      >
                        <option value="option1">Gauteng</option>
                        <option value="option2">Mpumalanga</option>
                        <option value="option3">Free State</option>
                        <option value="option1">Limpopo</option>
                        <option value="option2">Western Cape</option>
                        <option value="option3">Northern Cape</option>
                        <option value="option1">Eastern Cape</option>
                        <option value="option2">North West</option>
                        <option value="option3">KwaZulu-Natal</option>
                      </select>
                      <Button type="submit">Book Now</Button>
                      <BookingButton
                        isOpen={isOpen}
                        onClose={onClose}
                        username={bookingInfo.userName}
                        setBookingInfo={setBookingInfo}
                      />
                    </Box>
                  </form>
                </div>
              </>
            );
          }}
        </Formik>

        <Footer />
      </div>

      <ReCaptcha />
    </>
  );
};

export default BookATutor;
