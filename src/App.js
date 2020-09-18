import React, { useState } from "react";
import Map from "./components/Map";
import styled from "styled-components";
import ControlBar from "./components/ControlBar";
import ReactGA from "react-ga";
import SponsorshipBanner from "./components/SponsorshipBanner";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import env from "./env";

const AppContainer = styled.div`
  height: 100vh;
  position: absolute;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
`;

const MapContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;

// Initialise Fontawesome
library.add(faChevronDown, faChevronUp);

// Initialise Google Analytics
ReactGA.initialize(env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [myLocation, setMyLocation] = useState(undefined);
  const [theirLocation, setTheirLocation] = useState(undefined);

  const onMyLocationSelected = (location) => {
    setMyLocation(location);

    if (location) {
      ReactGA.event({
        category: "Location Selections",
        action: "'My' location set",
      });
    }
  };

  const onTheirLocationSelected = (location) => {
    setTheirLocation(location);

    if (location) {
      ReactGA.event({
        category: "Location Selections",
        action: "'Their' location set",
      });
    }
  };

  return (
    <AppContainer>
      <BannerContainer style={{ backgroundColor: "orange" }}>
        <SponsorshipBanner />
      </BannerContainer>
      <BannerContainer>
        <ControlBar myLocationSelected={onMyLocationSelected} theirLocationSelected={onTheirLocationSelected} />
      </BannerContainer>
      <MapContainer>
        <Map myLocation={myLocation} theirLocation={theirLocation} />
      </MapContainer>
    </AppContainer>
  );
}

export default App;
