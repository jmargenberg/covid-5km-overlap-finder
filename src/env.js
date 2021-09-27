import { str, num, cleanEnv } from "envalid";

const env = cleanEnv(process.env, {
  REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE: str({ require: true }),
  REACT_APP_MAPBOX_API_KEY: str({ require: true }),
  REACT_APP_ALGOLIA_PLACES_APP_ID: str({ require: true }),
  REACT_APP_ALGOLIA_PLACES_API_KEY: str({ require: true }),
  REACT_APP_RADIUS_KM_OPTIONS: str({ require: true, default: "5,10,15" }),
  REACT_APP_RADIUS_KM_DEFAULT: num({ require: true, default: 5 }),
});

export default env;
