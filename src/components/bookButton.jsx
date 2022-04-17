import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const BookingButton = ({ username, setBookingInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const closeModalHandler = () => {
    onClose(); // this is a function which changes the state of our userName to an empty string when the user close the modal
    setBookingInfo({
      userName: "",
      surname: "",
      userEmail: "",
      location: "Province",
      education: "Level of Education",
    });
  };
  return (
    <>
      <Button type="submit" onClick={onOpen}>
        Book Now
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            {username} thank you for booking, we'll get back to you as soon as
            posibble
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModalHandler}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default BookingButton;
