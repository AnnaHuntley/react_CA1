import React from 'react';
import usePlaceDetails from '../components/PlaceAddress';

function Guinness() {
  const { placeDetails, showDetails, toggleDetails } = usePlaceDetails('Guinness Storehouse', 'AIzaSyC9DZIJ-77Ydluh2ZGh7xWjLVrt2lt7tlk');

  return (
    <div id="g">
      <h1>Guinness Storehouse</h1>
      <p className="info">
        Set in the heart of Dublin is the iconic Guinness Storehouse. The brewery has been making Guinness here since 1769
        when Arthur Guinness signed a lease for 9,000 years. Nowadays the home of Guinness is a modern visitor attraction,
        where fans can learn about the process of making the famous black stuff, understand the history behind it and,
        of course, sample it.
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

export default Guinness;
