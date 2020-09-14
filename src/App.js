import React, { useState } from "react";
import Map from "./components/Map";
import styled from "styled-components";
import ControlBar from "./components/ControlBar";
import ReactGA from "react-ga";

const AppContainer = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ControlBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
`;

const MapContainer = styled.div`
  flex-grow: 1;
`;

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [myLocation, setMyLocation] = useState(undefined);
  const [theirLocation, setTheirLocation] = useState(undefined);

  return (
    <AppContainer>
      <ControlBarContainer>
        <ControlBar myLocationSelected={setMyLocation} theirLocationSelected={setTheirLocation} />
      </ControlBarContainer>
      <MapContainer>
        <Map myLocation={myLocation} theirLocation={theirLocation} />
      </MapContainer>
    </AppContainer>
  );
}

export default App;
