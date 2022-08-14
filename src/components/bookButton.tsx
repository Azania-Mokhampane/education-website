import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

interface IBookButtonProps {
  username: string;
  setBookingInfo: React.Dispatch<
    React.SetStateAction<{
      userName: string;
      surname: string;
      userEmail: string;
      education: string;
      location: string;
    }>
  >;
  isOpen: boolean;
  onClose: () => void;
}

const BookingButton = ({
  username,
  setBookingInfo,
  isOpen,
  onClose,
}: IBookButtonProps) => {
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
