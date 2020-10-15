import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import env from "./env";

const AppContainer = styled.div`
  height: 100vh;
  position: absolute;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  background-color: #1adddb;
`;

const RedirectionLabel = styled.h1``;

// Initialise Google Analytics
ReactGA.initialize(env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE);
ReactGA.pageview(window.location.pathname + window.location.search);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
  useEffect(() => {
    (async () => {
      ReactGA.event({
        category: "Redirect",
        action: "Redirect from overlap finder",
      });

      await sleep(150);

      window.location = "https://thebubble.in/";
    })();
  }, []);

  return (
    <AppContainer>
      <RedirectionLabel>Redirecting....</RedirectionLabel>
    </AppContainer>
  );
}

export default App;
