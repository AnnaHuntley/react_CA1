import React from 'react';
import usePlaceDetails from '../components/PlaceAddress';

function Skellig() {
  const { placeDetails, showDetails, toggleDetails } = usePlaceDetails('Skellig Michael', 'AIzaSyC9DZIJ-77Ydluh2ZGh7xWjLVrt2lt7tlk');
  return (
    <div id="s">
      <h1>Skellig Michael</h1>
      <p  className="info">If you are into Star Wars then you will want to visit Skellig Michael – and if you’re not, you should visit anyway because it is awe-inspiringly beautiful. The rocky island rises out of the Atlantic just off the Iveragh Peninsula and was frequented by ascetic monks, who chose the towering sea crag as a place to live and worship somewhere between the 6th and 8th centuries
      </p>
      {placeDetails && (
      <div className="address"  >
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

export default Skellig;
