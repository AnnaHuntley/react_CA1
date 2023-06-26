import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Moher() {
  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    // Fetch place details from the Google Places API
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(
          'https://maps.googleapis.com/maps/api/place/details/json',
          {
            params: {
              place_id: 'ChIJ05IRjKHxEQ0RJLV_5NLdK2w',
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

  if (!placeDetails) {
    return <div>Loading place details...</div>;
  }

  // Render the place details on the component
  return (
    <div>
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
      <h2>Place Details</h2>
      <p>Name: {placeDetails.name}</p>
      <p>Address: {placeDetails.formatted_address}</p>
     
    </div>
  );
}

export default Moher;
