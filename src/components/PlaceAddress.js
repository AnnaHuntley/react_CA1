import axios from 'axios';
import { useState, useEffect } from 'react';

// Custom hook for fetching and managing place details
const usePlaceDetails = (placeName, apiKey) => {
  // Define state variables for place details and show/hide details
  const [placeDetails, setPlaceDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Function to fetch place details
    const fetchPlaceDetails = async () => {
      try {
        // Call the Autocomplete API to get place suggestions based on the provided place name(The Autocomplete API is part of the Google Places API and is used to provide place suggestions based on user input)
        const autocompleteResponse = await axios.get('/api/maps/api/place/autocomplete/json', {
          params: {
            input: placeName,
            types: 'establishment',
            key: apiKey,
          },
        });

        // Check if any place suggestions are available
        const predictions = autocompleteResponse.data.predictions;
        if (predictions.length > 0 && predictions[0].place_id) {
          const placeId = predictions[0].place_id;

          // Call the Place Details API to retrieve detailed information about the place using its place ID
          const detailsResponse = await axios.get('/api/maps/api/place/details/json', {
            params: {
              place_id: placeId,
              fields: 'name,formatted_address',
              key: apiKey,
            },
          });

          // Update the place details state with the retrieved information
          setPlaceDetails(detailsResponse.data.result);
        } else {
          console.log('No place ID found for the given place name.');
        }
      } catch (error) {
        console.log('Error fetching place details:', error);
      }
    };

    // Fetch place details when the component mounts or when the placeName or apiKey changes
    fetchPlaceDetails();
  }, [placeName, apiKey]);

  // Function to toggle the visibility of place details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Return the place details, show/hide flag, and toggleDetails function for use in the component
  return { placeDetails, showDetails, toggleDetails };
};

export default usePlaceDetails;
