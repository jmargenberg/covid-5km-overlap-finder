# Victoria Covid 5km Lockdown Overlap Finder

[View on GitHub Pages](https://jmargenberg.github.io/covid-5km-overlap-finder/)

See where you and your friends have an overlap in their 5km lockdown radius.

## Required environment variables

- `REACT_APP_MAPBOX_API_KEY`
- `REACT_APP_ALGOLIA_PLACES_APP_ID`
- `REACT_APP_ALGOLIA_PLACES_API_KEY`
- `REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE`

**_If you are going to host this app publicly make sure you set API referrer restrictions and appropriate rate limits for each of these keys!_**

## Address Inputs

This repo has several implementations of an address input field to choose from:

- `GooglePlacesAddressInput` - This is a simple `react-select` based input using the Google Places API. It has the best address data by far but it crazy expensive at the scale this site is running at.
- `AlgoliaAddressInput` - This uses the standard Algolia search places input. It is a lot nicer looking than the others, has worse map data than Google and has a much lower cost per API call BUT it doesn't support debouncing so performs an API call for every single keystroke leading to an obscene number of API calls.
- `DebouncedAlgoliaAddressInput` - This is a custom `react-select` based input using Algolia search with support for debouncing. It isn't as pretty as the normal Algolia search but it supports debouncing, leading to an order of magnitude less API calls being performed.
