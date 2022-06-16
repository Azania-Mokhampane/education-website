import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

import { useColorModeValue } from "@chakra-ui/react";
import { IoSchoolOutline, IoLogoUsd, IoSearchSharp } from "react-icons/io5";

const Feature = ({ text, icon, iconBg }: any) => {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <div
        className="flex w-8 h-8 items-center justify-center rounded-full"
        // style={{ backgroundColor: `${iconBg}` }}
        // bg={iconBg}
      >
        {icon}
      </div>
      <p className="font-semibold ">{text}</p>
    </div>
  );
};

const About = () => {
  return (
    <>
      <NavBar />

      <div className="mx-5 md:mx-auto max-w-5xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <p
              className="uppercase bg-blue-100 dark:bg-blue-900 text-blue-400 font-bold text-xl p-2 self-start rounded-md"
              // bg={useColorModeValue("blue.50", "blue.900")}
            >
              About Us
            </p>
            <h2 className="text-3xl font-bold">A digital tutoring company</h2>
            <p className="text-gray-500 text-lg">
              Azania Math Solutions is a small business intended to help every
              individual who needs assisstance with Mathematics to improve their
              grades. We are one of the companies with best tutors who does not
              use a single method for teaching as individuals do not have the
              same level of understanding. At Azania Math Solutions we take
              those kinds of things into consideration and teach or help
              different individuals who has different needs with different
              teaching styles.
            </p>
            <div
              className="flex flex-col gap-4 divide-y divide-solid "
              // divider={
              //   <StackDivider
              //     borderColor={useColorModeValue("gray.100", "gray.700")}
              //   />
              // }
            >
              <Feature
                icon={
                  <IoSchoolOutline className="text-yellow-500  w-5 h-5" />
                  // <Icon as={IoSchoolOutline} color={"yellow.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Best Tutors"}
              />
              <Feature
                icon={<IoLogoUsd className="text-green-500 w-5 h-5" />}
                // <Icon as={IoLogoUsd} color={"green.500"} w={5} h={5} />
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Affordable"}
              />
              <Feature
                icon={
                  <IoSearchSharp className="text-purple-500 w-5 h-5" />
                  // <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Different Teaching Methods"}
              />
            </div>
          </div>
          <div className="flex">
            <img
              className="rounded-md object-cover"
              alt="numbers on the wall"
              src="img/about-math02.jpg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
