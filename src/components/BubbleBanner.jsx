import React, { useState } from "react";

import styled from "styled-components";
import banner from "../images/bubble_banner_white.png";
import ReactGA from "react-ga";
import { isAndroid } from "react-device-detect";

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

  const link = !isAndroid
    ? "https://apps.apple.com/us/app/id1532683720"
    : "https://play.google.com/store/apps/details?id=date.boop.bubble";

  return (
    <ReactGA.OutboundLink eventLabel="bubbleLink" to={link}>
      <BannerContainer>
        <BubbleImage src={banner} />
      </BannerContainer>
    </ReactGA.OutboundLink>
  );
};

export default BubbleBanner;
