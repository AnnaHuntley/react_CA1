import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Guiness() {
  const [placeDetails, setPlaceDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false); // Define showDetails state variable

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(
          '/api/maps/api/place/details/json',
          {
            params: {
              place_id: 'ChIJawXFQIQOZ0gRoucFdZIzGbM',
              fields: 'name,formatted_address',
              key: 'AIzaSyC9DZIJ-77Ydluh2ZGh7xWjLVrt2lt7tlk',
            },
          }
        );
        setPlaceDetails(response.data.result);
      } catch (error) {
        console.log('Error fetching place details:', error);
      }
    };

    fetchPlaceDetails();
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      {placeDetails && (
        <div>
          <button onClick={toggleDetails}>Address</button>
          {showDetails && (
            <div>
              <h2>{placeDetails.name}</h2>
              <p>{placeDetails.formatted_address}</p>
            </div>
          )}
        </div>
      )}
      <h1>Guinness Storehousee</h1>
      <p>Set in the heart of Dublin is the iconic Guinness Storehouse. The brewery has been making Guinness here since 1769 when Arthur Guinness signed a lease for 9,000 years. Nowadays the home of Guinness is a modern visitor attraction, where fans can learn about the process of making the famous black stuff, understand the history behind it and, of course, sample it.
    </p>
    </div>
  );
}

export default Guiness;
