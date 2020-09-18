import React, { useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./DonateBanner.css";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 500px;
  background-color: orange;
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
  color: #333333;
  text-align: center;

  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 15px;
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

  margin-left: 40px;
  margin-right: 40px;
`;

const ExplanationParagraph = styled.p`
  text-align: center;
  font-size: 0.9em;

  margin-top: 5px;
  margin-bottom: 5px;
  color: #333333;
`;

const Link = styled.a`
  color: #222;
`;

const SponsorshipBanner = () => {
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation((currShowExplanation) => !currShowExplanation);
  };

  return (
    <BannerContainer>
      <BannerHeader>
        <BannerTitle onClick={toggleExplanation}>We are looking for a sponsor!</BannerTitle>

        <ExpandChevronContainer onClick={toggleExplanation}>
          <FontAwesomeIcon icon={showExplanation ? faChevronUp : faChevronDown} style={{ display: "flex" }} />
        </ExpandChevronContainer>
      </BannerHeader>
      <ExplanationContainer className={showExplanation ? "shown" : "hidden"}>
        <ExplanationParagraph>Melbourne users are loving this app!</ExplanationParagraph>
        <ExplanationParagraph>
          I'm receiving tonnes of traffic but unfortunately the costs (address search API fees) are getting too great
          for me to fund out of my own pocket.
        </ExplanationParagraph>
        <ExplanationParagraph>
          I'd be delighted if a brand, be it a news site, cultural site, digital brand or any business is interested in
          adopting this site for full branding and/or redirection to a white-labeled version hosted on your site.
        </ExplanationParagraph>

        <ExplanationParagraph>
          If you are interested please contact{" "}
          <Link href="mailto:covid.5km.overlap.finder@gmail.com">covid.5km.overlap.finder@gmail.com</Link>.
        </ExplanationParagraph>
      </ExplanationContainer>
    </BannerContainer>
  );
};

export default SponsorshipBanner;
