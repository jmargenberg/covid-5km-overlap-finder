import { str, email, json, cleanEnv } from "envalid";

const env = cleanEnv(process.env, {
  REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE: str({ require: true }),
  REACT_APP_MAPBOX_API_KEY: str({ require: true }),
  REACT_APP_ALGOLIA_PLACES_APP_ID: str({ require: true }),
  REACT_APP_ALGOLIA_PLACES_API_KEY: str({ require: true }),
});

export default env;
