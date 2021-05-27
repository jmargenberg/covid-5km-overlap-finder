import React, { useState } from "react";

import styled from "styled-components";
import banner from "../images/bubble_banner_white.png";
import ReactGA from "react-ga";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  align-items: center;
  justify-content: center;

  max-width: 500px;
`;

const BubbleImage = styled.img`
  object-fit: contain;
  max-height: 100px;
`;

const BubbleBanner = () => {
  const [showExplanation, setShowExplanation] = useState(false);

  const toggleExplanation = () => {
    setShowExplanation((currShowExplanation) => !currShowExplanation);
  };

  return (
    <ReactGA.OutboundLink eventLabel="bubbleLink" to="https://apps.apple.com/us/app/id1532683720">
      <BannerContainer>
        <BubbleImage src={banner} />
      </BannerContainer>
    </ReactGA.OutboundLink>
  );
};

export default BubbleBanner;
