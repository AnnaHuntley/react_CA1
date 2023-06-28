import React from 'react';
import usePlaceDetails from '../components/PlaceAddress';

function Blarney() {
  const { placeDetails, showDetails, toggleDetails } = usePlaceDetails('Blarney Castle', 'AIzaSyC9DZIJ-77Ydluh2ZGh7xWjLVrt2lt7tlk');

  return (
    <div id="b">
      <h1>Blarney Castle</h1>
    <p  className="info">Stick your head over the parapet at the historic Blarney Castle and kiss the famous Blarney Stone as millions have done before you. It’s said that people who manage to kiss the mysterious Blarney Stone are endowed with ‘the gift of the gab’. This mystic relic isn’t the only interesting attraction at Blarney Castle – dating back to 1446, the medieval stronghold is a warren of stone passageways and dark dungeons, so take a tour and discover the castle’s hidden secrets and expanses of rambling green gardens.
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

export default Blarney;
