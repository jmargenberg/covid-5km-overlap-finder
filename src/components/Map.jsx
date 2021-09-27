import React, { useEffect } from "react";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import * as turf from "@turf/turf";
import env from "../env";
import ReactGA from "react-ga";

const MapBox = ReactMapboxGl({
  accessToken: env.REACT_APP_MAPBOX_API_KEY,
});

const INITIAL_BOUNDS = [
  [145.151596, -37.723742],
  [144.793065, -37.927951],
];
const BOUNDS_PADDING_KM_ONE_LOCATION = 5;
const BOUNDS_PADDING_KM_BOTH_LOCATIONS = 1;
const COVID_LOCKDOWN_CIRCLE_OPTIONS = { steps: 1_000, units: "kilometers" };

const MAP_BOX_STYLES = {
  myExclusiveAreaLinePaint: {
    "line-color": "#5eb0c2",
    "line-width": 1,
  },
  myExclusiveAreaFillPaint: {
    "fill-color": "#5eb0c2",
    "fill-opacity": 0.25,
  },
  theirExclusiveAreaLinePaint: {
    "line-color": "#52bf83",
    "line-width": 1,
  },
  theirExclusiveAreaFillPaint: {
    "fill-color": "#52bf83",
    "fill-opacity": 0.25,
  },
  inaccessibleAreaFillPaint: {
    "fill-color": "black",
    "fill-opacity": 0.25,
  },
};

const notFalsy = foo => foo;

const Map = props => {
  const { myLocation, theirLocation, radiusKm } = props;

  const bothLocationsSet = myLocation !== undefined && theirLocation !== undefined;
  const oneLocationSet = (myLocation !== undefined || theirLocation !== undefined) && !bothLocationsSet;

  // Determine each users total lockdown area
  const myLockdownArea = myLocation && turf.circle(myLocation, radiusKm, COVID_LOCKDOWN_CIRCLE_OPTIONS);
  const theirLockdownArea = theirLocation && turf.circle(theirLocation, radiusKm, COVID_LOCKDOWN_CIRCLE_OPTIONS);

  // Determine the shared lockdown area (if any)
  const sharedLockdownArea = bothLocationsSet ? turf.intersect(myLockdownArea, theirLockdownArea) : undefined;

  // Determine each users exclusive lockdown area (their entire lockdown area if only one provided)
  const myExclusiveLockdownArea = bothLocationsSet
    ? turf.difference(myLockdownArea, theirLockdownArea)
    : myLockdownArea;
  const theirExclusiveLockdownArea = bothLocationsSet
    ? turf.difference(theirLockdownArea, myLockdownArea)
    : theirLockdownArea;

  // Combing all lockdown areas into one feature collection
  const allLockdownAreas = turf.featureCollection(
    [myExclusiveLockdownArea, theirExclusiveLockdownArea, sharedLockdownArea].filter(notFalsy)
  );

  // Determine everywhere that is not within either user's lockdown areas
  const inaccessibleArea = turf.mask(allLockdownAreas);

  // Determine the maps bounds
  let mapFocusProps = {};

  if (bothLocationsSet || oneLocationSet) {
    // Zoom to fit both users lockdown areas
    const [minLng, minLat, maxLng, maxLat] = turf.bbox(allLockdownAreas);
    const boundsPadding = bothLocationsSet
      ? turf.lengthToDegrees(BOUNDS_PADDING_KM_BOTH_LOCATIONS, "kilometers")
      : turf.lengthToDegrees(BOUNDS_PADDING_KM_ONE_LOCATION, "kilometers");

    mapFocusProps = {
      fitBounds: [
        [minLng - boundsPadding, minLat - boundsPadding],
        [maxLng + boundsPadding, maxLat + boundsPadding],
      ],
    };
  } else {
    // Center map on the Melbourne CBD
    mapFocusProps = {
      fitBounds: INITIAL_BOUNDS,
    };
  }

  // Record some basic analytics on the overlap (if the areas overlap, the distance)
  useEffect(() => {
    if (!bothLocationsSet) return;

    try {
      const isOverlapping = sharedLockdownArea !== null;
      const distanceKm = Math.abs(turf.distance(myLocation, theirLocation));

      ReactGA.event({
        category: "Location Overlaps",
        action: isOverlapping ? "Locations overlapped" : "Locations didn't overlap",
        value: distanceKm,
      });
    } catch {}
  }, [myLocation, theirLocation, bothLocationsSet, sharedLockdownArea]);

  return (
    <MapBox
      // eslint-disable-next-line
      style='mapbox://styles/mapbox/streets-v11'
      containerStyle={{
        flex: 1,
      }}
      movingMethod='flyTo' // ensures the map animates on location change
      {...mapFocusProps}
    >
      <GeoJSONLayer
        data={turf.featureCollection([myExclusiveLockdownArea].filter(notFalsy))}
        linePaint={MAP_BOX_STYLES.myExclusiveAreaLinePaint}
        fillPaint={MAP_BOX_STYLES.myExclusiveAreaFillPaint}
      ></GeoJSONLayer>
      <GeoJSONLayer
        data={turf.featureCollection([theirExclusiveLockdownArea].filter(notFalsy))}
        linePaint={MAP_BOX_STYLES.theirExclusiveAreaLinePaint}
        fillPaint={MAP_BOX_STYLES.theirExclusiveAreaFillPaint}
      ></GeoJSONLayer>
      <GeoJSONLayer data={inaccessibleArea} fillPaint={MAP_BOX_STYLES.inaccessibleAreaFillPaint}></GeoJSONLayer>
    </MapBox>
  );
};

export default Map;
