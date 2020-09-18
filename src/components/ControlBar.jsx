import React from "react";
import DebouncedAlgoliaAddressInput from "./DebouncedAlgoliaAddressInput";
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
      <DebouncedAlgoliaAddressInput onLocationSelected={myLocationSelected} placeholder="Where do you live?" />
      <DebouncedAlgoliaAddressInput onLocationSelected={theirLocationSelected} placeholder="Where do they live?" />
    </ControlBarContentsContainer>
  );
};

export default ControlBar;
