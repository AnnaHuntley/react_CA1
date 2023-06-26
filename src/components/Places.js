import React from 'react';
import Place from '../view/Place';


function Places(props) {
  return (
    <div>
         {props.places.map((place, index) => (
        <Place
          key={index}
          name={place.name}
          description={place.description}
          link={place.link}
          image={place.image}
          info={place.info}
        />
      ))}
    </div>
  );
}

export default Places;
