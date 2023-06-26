import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Moher() {
  const [placeDetails, setPlaceDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false); // Define showDetails state variable

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(
          '/api/maps/api/place/details/json',
          {
            params: {
              place_id: 'ChIJ84G4C68BW0gR5sC4SJBGOig',
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

      <h1>Cliffs of Moher</h1>
      <p>
        Standing at 214 meters over the depths of the Atlantic Ocean, and
        stretching for an awesome 8 km, are the rugged Cliffs of Moher in County
        Clare. Visitors are drawn to the cliffs, not just for their sheer
        impressive size, but also for the views of the breath-taking landscape –
        on a clear day it is possible to see all 5 of the surrounding counties as
        well as the Aran Islands. The awe-inspiring cliffs are also home to
        Ireland’s largest mainland seabird colony, which between April and July
        includes Puffins!.
      </p>
      
    </div>
  );
}

export default Moher;
