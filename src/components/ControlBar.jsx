import React from "react";
import AlgoliaAddressInput from "./AlgoliaAddressInput";

import styled from "styled-components";

const ControlBarContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 500px;
  margin: 5px;
`;

const ControlBar = (props) => {
  const { myLocationSelected, theirLocationSelected } = props;

  return (
    <ControlBarContentsContainer>
      <AlgoliaAddressInput onLocationSelected={myLocationSelected} placeholder="Where do you live?" />
      <AlgoliaAddressInput onLocationSelected={theirLocationSelected} placeholder="Where do they live?" />
    </ControlBarContentsContainer>
  );
};

export default ControlBar;
