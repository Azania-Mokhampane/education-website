import React, { createRef } from "react";
import Recaptcha from "react-google-invisible-recaptcha";

const ReCaptcha = () => {
  const recaptchaRef = createRef();
  return (
    <>
      <Recaptcha
        ref={recaptchaRef}
        size="invisible"
        sitekey="6Lesf1ofAAAAADJx5O-er2l_Ppo1Dq4BsgC_hO5K"
      />
    </>
  );
};

export default ReCaptcha;
