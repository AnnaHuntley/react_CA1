import React from 'react';
import usePlaceDetails from '../components/PlaceAddress';

function Newgrange() {
  const { placeDetails, showDetails, toggleDetails } = usePlaceDetails('Newgrange', 'AIzaSyC9DZIJ-77Ydluh2ZGh7xWjLVrt2lt7tlk');
  return (
    <div id="n">
      <h1>Newgrange</h1>
      <p  className="info">Welcome to the Ireland Tourist Guide!
      The unimaginably old stone structure of Newgrange tomb was built in 3200 BC. The domed Megalithic Passage Tomb is estimated to have taken 300 people 20 years to build and covers an area of over one acre, revealing interior stones decorated with the spirals and curves of Neolithic rock art. During the Winter Solstice the passageway, along with the inner chamber, is incredibly illuminated by the sunrise that streams through a roof box at the entrance.
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

export default Newgrange;
