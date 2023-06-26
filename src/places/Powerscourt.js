import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Powerscourt() {
  const [placeDetails, setPlaceDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false); // Define showDetails state variable

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(
          '/api/maps/api/place/details/json',
          {
            params: {
              place_id: 'ChIJp-IbAv2mZ0gRvIV9f0y-uz0',
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
      <h1>Powerscourt Estate</h1>
      <p>
      Just 20 km from Dublin is the ineffably grand Powerscourt Estate. Set in 47 acres of beautiful land, the gardens were created 150 years ago with the idea of blending the stately home seamlessly into the surrounding landscape. Against the bold backdrop of the Great Sugar Loaf Mountains, the gardens are home to 200 varieties of trees, a rose garden, an Italian garden, and a large kitchen garden. There are many trails to walk along through the vast landscape – one of which leads to Powerscourt Falls, Ireland’s highest waterfall at 121 meters.
    </p>
    </div>
  );
}

export default Powerscourt;
