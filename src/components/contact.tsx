import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import ReCaptcha from "./recaptcha";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />

      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg={useColorModeValue("gray.300", "gray.900")}
            color={useColorModeValue("gray.900", "gray.100")}
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact Us</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to keep in touch with us
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <a href="tel:+27691456585">
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color={useColorModeValue("gray.800", "gray.200")}
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}
                          >
                            +27 69 145 6585
                          </Button>
                        </a>

                        <a href="mailto:azaniam04@gmail.com">
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color={useColorModeValue("gray.800", "gray.200")}
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}
                          >
                            {" "}
                            azaniam04@gmail.com
                          </Button>
                        </a>

                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={useColorModeValue("gray.800", "gray.200")}
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={
                            <MdLocationOn color="#1970F1" size="20px" />
                          }
                        >
                          Gauteng, South Africa
                        </Button>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box
                    bg={useColorModeValue("white", "gray.800")}
                    borderRadius="lg"
                  >
                    <form>
                      <Box m={8} color={useColorModeValue("gray.900", "white")}>
                        <VStack spacing={5}>
                          <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input
                                type="text"
                                size="md"
                                required
                                placeholder="Name"
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Email</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                              />
                              <Input
                                type="email"
                                size="md"
                                placeholder="Email"
                                required
                              />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: "gray.300",
                              }}
                              placeholder="Message"
                              required
                            />
                          </FormControl>
                          <FormControl id="name" float="right">
                            <button type="submit">
                              <Button
                                variant="solid"
                                bg="#0D74FF"
                                color="white"
                                _hover={{}}
                              >
                                Send Message
                              </Button>
                            </button>
                          </FormControl>
                        </VStack>
                      </Box>
                    </form>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>

      <Footer />
      <ReCaptcha />
    </>
  );
};

export default ContactUs;
