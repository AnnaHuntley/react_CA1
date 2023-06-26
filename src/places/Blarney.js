import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Blarney() {

  const [placeDetails, setPlaceDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(
          '/api/maps/api/place/details/json',
          {
            params: {
              place_id: 'ChIJt0TfOD2QREgRyEeLjGPDt68',
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
   
      <h1>Blarney Castle</h1>
    <p>Stick your head over the parapet at the historic Blarney Castle and kiss the famous Blarney Stone as millions have done before you. It’s said that people who manage to kiss the mysterious Blarney Stone are endowed with ‘the gift of the gab’. This mystic relic isn’t the only interesting attraction at Blarney Castle – dating back to 1446, the medieval stronghold is a warren of stone passageways and dark dungeons, so take a tour and discover the castle’s hidden secrets and expanses of rambling green gardens.
    </p>
    </div>
  );
}

export default Blarney;
