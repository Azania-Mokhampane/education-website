import React from "react";
import NavBar from "./navbar";
import { Formik } from "formik";
import Footer from "./footer";

import "../styles/custom.css";

const BookATutor = () => {
  return (
    <>
      <NavBar />
      <h1 className="pt-20 text-center text-3xl font-medium  leading-10">
        {" "}
        <u>Book A Tut</u>or Today
      </h1>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Your email is required!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className="p-10 mt-10 sm:mt-0">
            <div className="md:grid-cols-3 md:gap-6 sm:pl-40 sm:pr-40">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium text-center leading-6 text-gray-900">
                    Personal Information
                  </h3>
                </div>
              </div>
              <br />
              <div className="mt-5 md:mt-0 md:col-span-2 ">
                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-gray-400 sm:p-6">
                      <div className="">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            required
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email-address"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            autoComplete="email"
                            className="mt-1  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          {errors.email && touched.email && errors.email}
                        </div>

                        <div className="col-span-6 ">
                          <label
                            htmlFor="level-of-education"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Level of Education
                          </label>
                          <select
                            type="text"
                            name="level-of-education"
                            id="level-of-education"
                            autoComplete="level-of-education"
                            className="mt-1 focus:ring-gray-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          >
                            <option></option>
                            <option>Primary </option>
                            <option>Secondary </option>
                            <option>Tertiary </option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Province
                          </label>
                          <select
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          >
                            <option></option>
                            <option>Gauteng</option>
                            <option>Mpumalanga</option>
                            <option>Western Cape</option>
                            <option>Northern Cape</option>
                            <option>Kwazulu-Natal</option>
                            <option>Eastern Cape</option>
                            <option>Limpopo</option>
                            <option>North Wet</option>
                            <option>Free State</option>
                          </select>
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-400 text-center sm:px-6">
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>

      <Footer />
    </>
  );
};

export default BookATutor;
