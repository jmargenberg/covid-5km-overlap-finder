import React, { useState } from "react";

import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./DonateBanner.css";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 500px;

  /* Prevents the banner from being hidden behind nav bars on mobile  */
  @media (max-width: 480px) {
    margin-bottom: 75px;
  }
`;

const BannerHeader = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 20px;
`;

const BannerTitle = styled.h4`
  flex-grow: 2;
  color: orange;
  text-align: center;

  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 15px;
`;

const DonateButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ExpandChevronContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: 15px;
`;

const ExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;

  margin-left: 40px;
  margin-right: 40px;
`;

const ExplanationParagraph = styled.p`
  text-align: center;
  font-size: 0.9em;

  margin-top: 5px;
  margin-bottom: 5px;
`;

const PaypalDonateButton = () => (
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={{ display: "flex" }}>
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value={process.env.REACT_APP_PAYPAL_HOSTED_BUTTON_ID} />

    <input
      type="image"
      src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_SM.gif"
      border="0"
      name="submit"
      title="PayPal - The safer, easier way to pay online!"
      alt="Donate with PayPal button"
    />
    <img alt="" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
  </form>
);

const DonateBanner = () => {
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation((currShowExplanation) => !currShowExplanation);
  };

  return (
    <BannerContainer>
      <BannerHeader>
        <BannerTitle onClick={toggleExplanation}>
          Small donations would be greatly appreciated to help keep this site free and online!
        </BannerTitle>
        <DonateButtonContainer>
          <PaypalDonateButton />
        </DonateButtonContainer>

        <ExpandChevronContainer onClick={toggleExplanation}>
          <FontAwesomeIcon
            // onClick={toggleExplanation}
            icon={showExplanation ? faChevronUp : faChevronDown}
            style={{ display: "flex" }}
          />
        </ExpandChevronContainer>
      </BannerHeader>
      <ExplanationContainer className={showExplanation ? "shown" : "hidden"}>
        <ExplanationParagraph>Hope you are finding great places to meet!</ExplanationParagraph>
        <ExplanationParagraph>
          Keeping this site online has cost me over $280 in address search fees so far.
        </ExplanationParagraph>
        <ExplanationParagraph>
          If you could throw a few bucks my way to help me keep it online and free that would be greatly appreciated!
        </ExplanationParagraph>
      </ExplanationContainer>
    </BannerContainer>
  );
};

export default DonateBanner;
