import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Skellig() {
  const [placeDetails, setPlaceDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(
          '/api/maps/api/place/details/json',
          {
            params: {
              place_id: 'ChIJFQfF_We8T0gR4PkgJ-cXwJo',
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
      <h1>Skellig Michael</h1>
      <p>If you are into Star Wars then you will want to visit Skellig Michael – and if you’re not, you should visit anyway because it is awe-inspiringly beautiful. The rocky island rises out of the Atlantic just off the Iveragh Peninsula and was frequented by ascetic monks, who chose the towering sea crag as a place to live and worship somewhere between the 6th and 8th centuries
      </p>
    </div>
  );
}

export default Skellig;
