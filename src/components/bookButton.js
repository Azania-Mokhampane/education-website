import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const BookingButton = ({ username, setUserInfo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button type="submit" onClick={onOpen}>
        Book
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {username} thank you for booking, we'll get back to you as soon as
            posibble
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                setUserInfo(""); // this is a function which changes the state of our userName to an empty string when the user close the modal
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default BookingButton;
