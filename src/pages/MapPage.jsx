import React, { useCallback, useMemo, useState } from "react";
import Map from "../components/Map";
import styled from "styled-components";
import ControlBar from "../components/ControlBar";
import ReactGA from "react-ga";
import env from "../env";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, useLocation } from "react-router";

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

const RADIUS_QUERY_PARAM = "radius";

function MapPage() {
  const [myLocation, setMyLocation] = useState(undefined);
  const [theirLocation, setTheirLocation] = useState(undefined);

  const location = useLocation();
  const history = useHistory();

  // Get the radius from search params or use defualt
  const radiusKm = useMemo(() => {
    const paramValue = new URLSearchParams(location.search).get(RADIUS_QUERY_PARAM);

    return paramValue && !isNaN(paramValue) ? Number(paramValue) : env.REACT_APP_RADIUS_KM_DEFAULT;
  }, [location.search]);

  const onSelectRadiusKm = useCallback(
    selectedRadiusKm => {
      // Set the radius search param to selected value (or remove if default selected)

      if (selectedRadiusKm !== env.REACT_APP_RADIUS_KM_DEFAULT) {
        history.push(`/?${RADIUS_QUERY_PARAM}=${selectedRadiusKm}`);
      } else {
        history.push(`/`);
      }
    },
    [history]
  );

  const onMyLocationSelected = location => {
    setMyLocation(location);

    if (location) {
      ReactGA.event({
        category: "Location Selections",
        action: "'My' location set",
      });
    }
  };

  const onTheirLocationSelected = location => {
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
      <BannerContainer>
        <ControlBar
          myLocationSelected={onMyLocationSelected}
          theirLocationSelected={onTheirLocationSelected}
          radiusKm={radiusKm}
          onSelectRadiusKm={onSelectRadiusKm}
        />
      </BannerContainer>
      <MapContainer>
        <Map myLocation={myLocation} theirLocation={theirLocation} radiusKm={radiusKm} />
      </MapContainer>
    </AppContainer>
  );
}

export default MapPage;
