import React from "react";
import AddressInput from "./AddressInput";

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
      <AddressInput onLocationSelected={myLocationSelected} placeholder="Where do you live?" />
      <AddressInput onLocationSelected={theirLocationSelected} placeholder="Where do they live?" />
    </ControlBarContentsContainer>
  );
};

export default ControlBar;
