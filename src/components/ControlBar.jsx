import React, { useCallback, useMemo } from "react";
import DebouncedAlgoliaAddressInput from "./DebouncedAlgoliaAddressInput";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import env from "../env";
import "./ControlBar.css";

const ControlBarContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 500px;
  margin: 5px;
`;

const InputContainer = styled.div`
  margin: 5px;
  text-align: right;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const LockdownRadiusLabel = styled.div`
  font-size: 0.9em;
  color: #6c757d;
  margin: 0px 10px;
`;

const ControlBar = props => {
  const { myLocationSelected, theirLocationSelected, radiusKm, onSelectRadiusKm } = props;

  const radiusKmOptions = useMemo(() => env.REACT_APP_RADIUS_KM_OPTIONS.split(",").map(Number), []);

  const onRadiusKmOptionSelect = useCallback(
    radiusKmOptionIndex => {
      onSelectRadiusKm(radiusKmOptions[radiusKmOptionIndex]);
    },

    [radiusKmOptions, onSelectRadiusKm]
  );

  return (
    <ControlBarContentsContainer>
      <DebouncedAlgoliaAddressInput onLocationSelected={myLocationSelected} placeholder='Where do you live?' />
      <DebouncedAlgoliaAddressInput onLocationSelected={theirLocationSelected} placeholder='Where do they live?' />
      <InputContainer>
        <LockdownRadiusLabel>Lockdown radius:</LockdownRadiusLabel>
        <Dropdown>
          <Dropdown.Toggle id='dropdown-basic' size='sm' variant='secondary'>
            {radiusKm}km
          </Dropdown.Toggle>

          <Dropdown.Menu onSelect={onRadiusKmOptionSelect} className='radius-dropdown'>
            {radiusKmOptions.map((radiusKmOption, index) => (
              <Dropdown.Item eventKey={index} onSelect={onRadiusKmOptionSelect} className='radius-dropdown__item'>
                {radiusKmOption}km
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </InputContainer>
    </ControlBarContentsContainer>
  );
};

export default ControlBar;
