import axios from 'axios';
import React, { useState, useEffect } from 'react';
function Newgrange() {
  const [placeDetails, setPlaceDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(
          '/api/maps/api/place/details/json',
          {
            params: {
              place_id: 'ChIJL-3aomI4Z0gRF4zQvv0Phcw',
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
      <h1>Newgrange</h1>
      <p>Welcome to the Ireland Tourist Guide!
      The unimaginably old stone structure of Newgrange tomb was built in 3200 BC. The domed Megalithic Passage Tomb is estimated to have taken 300 people 20 years to build and covers an area of over one acre, revealing interior stones decorated with the spirals and curves of Neolithic rock art. During the Winter Solstice the passageway, along with the inner chamber, is incredibly illuminated by the sunrise that streams through a roof box at the entrance.
    </p>
    </div>
  );
}

export default Newgrange;
