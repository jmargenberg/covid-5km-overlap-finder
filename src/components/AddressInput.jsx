import React from "react";
import GooglePlacesAutocomplete, { geocodeByPlaceId } from "react-google-places-autocomplete";

import styled from "styled-components";

const AUTOCOMPLETION_SETTINGS = {
  componentRestrictions: { country: "au" },
  location: { lat: -37.816204, lng: 144.957489 }, // Melbourne CBD
  radius: 70_000, // 7km
};

const AddressInputContainer = styled.div`
  flex: 1;

  margin: 5px;
`;

const AddressInput = (props) => {
  const { onLocationSelected, placeholder } = props;

  const onPlaceSelected = async (place) => {
    const placeId = place?.value?.place_id;
    const geocodeResult = await geocodeByPlaceId(placeId);

    if (geocodeResult?.length > 0) {
      const location = [geocodeResult[0]?.geometry?.location?.lng(), geocodeResult[0]?.geometry?.location?.lat()];

      await onLocationSelected(location);
    }
  };

  return (
    <AddressInputContainer>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        autocompletionRequest={AUTOCOMPLETION_SETTINGS}
        minLengthAutocomplete={1}
        selectProps={{
          onChange: onPlaceSelected,
          placeholder,
        }}
      />
    </AddressInputContainer>
  );
};

export default AddressInput;
