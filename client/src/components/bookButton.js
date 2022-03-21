import React from "react";
import { useToast } from "@chakra-ui/toast";

const BookingButton = () => {
  const toast = useToast();
  return (
    <button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </button>
  );
};
export default BookingButton;
