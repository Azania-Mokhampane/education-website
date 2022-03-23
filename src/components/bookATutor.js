import React, { useState } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import BookingButton from "./bookButton";
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";

import "../styles/custom.css";

const BookATutor = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.900");
  const [userName, setUserName] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <NavBar />
      <h1 className="pt-20 text-center text-3xl font-medium  leading-10">
        <u>Book A Tut</u>or Today
      </h1>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          password: "",
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
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
                    <Heading mb={6}>Login In</Heading>
                    <Input
                      value={userName}
                      id="name"
                      placeholder="Name"
                      onChange={userNameHandler}
                      variant="filled"
                      mb={3}
                      type="text"
                      required
                      className="overflow-hidden"
                    ></Input>
                    <Input
                      value={values.surname}
                      id="surname"
                      placeholder="Surname"
                      variant="filled"
                      mb={3}
                      type="text"
                      onChange={handleChange}
                      required
                    ></Input>
                    <Input
                      value={values.email}
                      id="email"
                      placeholder="Enter Email Address"
                      variant="filled"
                      mb={3}
                      type="email"
                      onChange={handleChange}
                      required
                    ></Input>
                    <Input
                      id="password"
                      placeholder="Enter Password"
                      variant="filled"
                      mb={6}
                      type="password"
                      onChange={handleChange}
                    ></Input>
                    <BookingButton
                      username={userName}
                      setUserName={setUserName}
                    />
                    <br />
                    <Button onClick={toggleColorMode}>Toggle Color</Button>
                  </Flex>
                </form>
              </Flex>
            </>
          );
        }}
      </Formik>

      <Footer />
    </>
  );
};

export default BookATutor;
