import React from 'react';
import usePlaceDetails from '../components/PlaceAddress';

function Moher() {
  const { placeDetails, showDetails, toggleDetails } = usePlaceDetails('Cliffs of Moher', 'AIzaSyC9DZIJ-77Ydluh2ZGh7xWjLVrt2lt7tlk');
  return (
    <div id='m'>
      <h1>Cliffs of Moher</h1>
      <p className="info">
        Standing at 214 meters over the depths of the Atlantic Ocean, and
        stretching for an awesome 8 km, are the rugged Cliffs of Moher in County
        Clare. Visitors are drawn to the cliffs, not just for their sheer
        impressive size, but also for the views of the breath-taking landscape –
        on a clear day it is possible to see all 5 of the surrounding counties as
        well as the Aran Islands. The awe-inspiring cliffs are also home to
        Ireland’s largest mainland seabird colony, which between April and July
        includes Puffins!.
      </p>
  
      {placeDetails && (
        <div className="address">
          <button onClick={toggleDetails}>Address</button>
          {showDetails && (
            <div>
              <h2>{placeDetails.name}</h2>
              <p>{placeDetails.formatted_address}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Moher;
