import React from "react";
import AlgoliaPlaces from "algolia-places-react";
import env from "../env";
import styled from "styled-components";

const ALGOLIA_PLACES_OPTIONS = {
  appId: env.REACT_APP_ALGOLIA_PLACES_APP_ID,
  apiKey: env.REACT_APP_ALGOLIA_PLACES_API_KEY,
  language: "en",
  countries: ["au"],
  aroundLatLng: "-37.816204,144.957489", // Melbourne CBD
  aroundRadius: 70_000, // 70km
};

const AddressInputContainer = styled.div`
  flex: 1;

  margin: 5px;
`;

const AddressInput = (props) => {
  const { onLocationSelected, placeholder } = props;

  const onPlaceSelected = async ({ suggestion }) => {
    const location = [suggestion?.latlng?.lng, suggestion?.latlng?.lat];

    await onLocationSelected(location);
  };

  const onClear = async () => {
    onLocationSelected(undefined);
  };

  const onLimit = () => {
    alert("Too many requests from your IP. Sorry but address search requests aren't cheap 😬");
  };

  return (
    <AddressInputContainer>
      <AlgoliaPlaces
        placeholder={placeholder}
        options={ALGOLIA_PLACES_OPTIONS}
        onChange={onPlaceSelected}
        onClear={onClear}
        onLimit={onLimit}
      />
    </AddressInputContainer>
  );
};

export default AddressInput;
