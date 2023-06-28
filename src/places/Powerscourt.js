import React from 'react';
import usePlaceDetails from '../components/PlaceAddress';

function Powerscourt() {
  const { placeDetails, showDetails, toggleDetails } = usePlaceDetails('Powerscourt Estate', 'AIzaSyC9DZIJ-77Ydluh2ZGh7xWjLVrt2lt7tlk');
  return (
    <div id="p">
      <h1>Powerscourt Estate</h1>
      <p  className="info">
      Just 20 km from Dublin is the ineffably grand Powerscourt Estate. Set in 47 acres of beautiful land, the gardens were created 150 years ago with the idea of blending the stately home seamlessly into the surrounding landscape. Against the bold backdrop of the Great Sugar Loaf Mountains, the gardens are home to 200 varieties of trees, a rose garden, an Italian garden, and a large kitchen garden. There are many trails to walk along through the vast landscape – one of which leads to Powerscourt Falls, Ireland’s highest waterfall at 121 meters.
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

export default Powerscourt;
