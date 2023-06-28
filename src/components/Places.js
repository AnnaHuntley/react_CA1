import React from 'react';
import Place from '../view/Place';


function Places(props) {
  return (
    <div className="places-container">
      {props.places.map((place, index) => (
        <div className="place-container" key={index}>
          <Place
            name={place.name}
            description={place.description}
            link={place.link}
            image={place.image}
          />
        </div>
      ))}
    </div>
  );
}

export default Places;
