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
  Select,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";

import "../styles/custom.css";

const BookATutor = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.900");
  const [userName, setUserName] = useState("");
  const [surname, setSurname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  // const [userInfo, setUserInfo] = useState({
  //   userName: "",
  //   userSurname: "",
  //   userEmail: "",
  // });

  // const userInfoHandler = (event) => {
  //   setUserInfo(event.target.value);
  // };
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const surnameHandler = (event) => {
    setSurname(event.target.value);
  };
  const userEmailHandler = (event) => {
    setUserEmail(event.target.value);
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
                      value={surname}
                      id="surname"
                      placeholder="Surname"
                      variant="filled"
                      mb={3}
                      type="text"
                      onChange={surnameHandler}
                      required
                    ></Input>
                    <Input
                      value={userEmail}
                      id="email"
                      placeholder="Enter Email Address"
                      variant="filled"
                      mb={3}
                      type="email"
                      onChange={userEmailHandler}
                      required
                    ></Input>
                    <Select
                      placeholder="Level Of Education"
                      variant="filled"
                      mb={3}
                    >
                      <option value="option1">Primary</option>
                      <option value="option2">Secondary</option>
                      <option value="option3">Tertiary</option>
                    </Select>

                    <Select placeholder="Province" variant="filled" mb={3}>
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
                      username={userName}
                      type="submit"
                      // setUserInfo={setUserInfo}
                    />
                    <Button mt={3} onClick={toggleColorMode}>
                      Toggle Color
                    </Button>
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
