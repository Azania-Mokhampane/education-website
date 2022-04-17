import React, { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import BookingButton from "./bookButton";
import {
  Flex,
  Heading,
  Input,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import ReCaptcha from "./recaptcha";

import "../styles/custom.css";

const BookATutor = () => {
  const formBackground = useColorModeValue("gray.300", "gray.900");
  const [bookingInfo, setBookingInfo] = useState({
    userName: "",
    surname: "",
    userEmail: "",
    education: "Level Of Education",
    location: "Province",
  });

  return (
    <>
      <NavBar />
      <h1 className="pt-20 text-center text-3xl font-medium  leading-10">
        Book A Tutor Today
      </h1>
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
        {({ handleSubmit }) => {
          return (
            <>
              <Flex height="100vh" alignItems="center" justifyContent="center">
                <form
                  style={{ width: "auto", height: "auto" }}
                  onSubmit={handleSubmit}
                >
                  <Flex
                    direction="column"
                    background={formBackground}
                    p={12}
                    rounded={6}
                  >
                    <Heading mb={6}>Personal Information</Heading>
                    <Input
                      value={bookingInfo.userName}
                      id="name"
                      placeholder="Name"
                      onChange={(e) =>
                        setBookingInfo({
                          ...bookingInfo,
                          userName: e.target.value,
                        })
                      }
                      variant="filled"
                      mb={3}
                      type="text"
                      required
                      className="overflow-hidden"
                    ></Input>
                    <Input
                      value={bookingInfo.surname}
                      id="surname"
                      placeholder="Surname"
                      variant="filled"
                      mb={3}
                      type="text"
                      onChange={(e) =>
                        setBookingInfo({
                          ...bookingInfo,
                          surname: e.target.value,
                        })
                      }
                      required
                    ></Input>
                    <Input
                      value={bookingInfo.userEmail}
                      id="email"
                      placeholder="Enter Email Address"
                      variant="filled"
                      mb={3}
                      type="email"
                      onChange={(e) =>
                        setBookingInfo({
                          ...bookingInfo,
                          userEmail: e.target.value,
                        })
                      }
                      required
                    ></Input>
                    <Select
                      value={bookingInfo.education}
                      placeholder="Level of Education"
                      variant="filled"
                      mb={3}
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
                    </Select>

                    <Select
                      value={bookingInfo.location}
                      placeholder="Province"
                      variant="filled"
                      mb={3}
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
                    </Select>

                    <BookingButton
                      username={bookingInfo.userName}
                      setBookingInfo={setBookingInfo}
                      // setUserInfo={setUserInfo}
                    />
                  </Flex>
                </form>
              </Flex>
            </>
          );
        }}
      </Formik>

      <Footer />
      <ReCaptcha />
    </>
  );
};

export default BookATutor;
