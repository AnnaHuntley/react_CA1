import React from 'react';
import Place from '../view/Place';
import { Outlet } from 'react-router-dom';

function Places(props) {
  return (
    <div>
        <Outlet />
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
