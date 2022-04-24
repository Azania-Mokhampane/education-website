import React from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

import "../styles/custom.css";

const LandingSection = () => {
  return (
    <>
      <Stack p={8} minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Stack
          flex={1}
          align={"center"}
          justify={"center"}
          spacing={{ base: 5, md: 10 }}
          w={"full"}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} color={"white.400"}>
              Azania Math Solutions!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Why Struggle with Mathematics when you can just contact us and get{" "}
            <br />
            the best tutor who will help you reach your academic goals.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
            >
              <Link to="/bookATutor">Get A Tutor Today</Link>
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={{ base: "300px", md: "500px" }}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              // fit={"cover"}
              align={"center"}
              w={"120%"}
              h={"100%"}
              src={"img/teaching02.svg"}
            />
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default LandingSection;
