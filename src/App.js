import React from "react";
import ReactGA from "react-ga";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import env from "./env";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";

// Initialise Fontawesome
library.add(faChevronDown, faChevronUp);

// Initialise Google Analytics
ReactGA.initialize(env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Router basename='/covid-5km-overlap-finder'>
      <Switch>
        <Route path='/'>
          <MapPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
