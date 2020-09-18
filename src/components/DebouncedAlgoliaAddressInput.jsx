import React from "react";

import AsyncSelect from "react-select/async";
import env from "../env";
import algoliasearch from "algoliasearch";
import debounce from "debounce-promise";
import styled from "styled-components";

// Initialise the Algolia Places API
var places = algoliasearch.initPlaces(env.REACT_APP_ALGOLIA_PLACES_APP_ID, env.REACT_APP_ALGOLIA_PLACES_API_KEY);

const SEARCH_OPTIONS = {
  hitsPerPage: 5,
  language: "en",
  countries: ["au"],
  aroundLatLng: "-37.816204,144.957489", // Melbourne CBD
  aroundRadius: 70_000, // 70kms
};

const InputContainer = styled.div`
  margin: 5px;
`;

/**
 * Performs an Algolia places search as a Promise.
 * @param {*} query the search text provided by the user
 */
const searchPlaces = (query) =>
  new Promise((resolve, reject) => {
    if (!query) {
      resolve([]);
      return;
    }

    places.search({ query, ...SEARCH_OPTIONS }, (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });

/**
 * Debounces the search to only run once every second. This drastically reduces the number of API calls and cost of running the site!
 */
const debouncedSearchPlaces = debounce(searchPlaces, 1_000);

const notFalsy = (x) => x;

/**
 * Attempts to convert place into short human readable string.
 *
 * Some places have data filed incorrectly, e.g. some suburbs are listed as addresses in neighboring suburbs.
 * It is super weird.
 * @param {*} place
 */
const placeToSuggestionString = (place) => {
  return [
    place.locale_names ? place.locale_names[0] : undefined,
    (place.suburb ? place.suburb[0] : undefined) || (place.city ? place.city[0] : undefined),
    place.administrative ? place.administrative[0] : undefined,
  ]
    .filter(notFalsy)
    .join(", ");
};

const DebouncedAlgoliaAddressInput = (props) => {
  const { onLocationSelected, placeholder } = props;

  const loadOptions = async (input) => {
    const searchResponse = await debouncedSearchPlaces(input);
    return searchResponse?.hits?.map((place) => ({
      value: place,
      label: placeToSuggestionString(place),
    }));
  };

  const onSuggestionSelected = async (selection) => {
    if (selection && selection != null) {
      const place = selection.value;
      const location = [place?._geoloc?.lng, place?._geoloc?.lat];

      await onLocationSelected(location);
    } else {
      await onLocationSelected(undefined);
    }
  };

  return (
    <InputContainer>
      <AsyncSelect
        defaultOptions
        placeholder={placeholder}
        loadOptions={loadOptions}
        onChange={onSuggestionSelected}
        isClearable={true}
      />
    </InputContainer>
  );
};

export default DebouncedAlgoliaAddressInput;
