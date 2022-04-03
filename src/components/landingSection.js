import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";

import "../styles/custom.css";

const LandingSection = () => {
  return (
    <>
      <Container maxW={"7xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
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
                colorScheme={"red"}
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
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <IconButton
                aria-label={"Play Button"}
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                size={"lg"}
                color={"white"}
                position={"absolute"}
                left={"50%"}
                top={"50%"}
                transform={"translateX(-50%) translateY(-50%)"}
              />
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
      </Container>
    </>
  );
};

export default LandingSection;
