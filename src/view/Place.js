import React from 'react';
import { Link } from 'react-router-dom';

function Place(props) {
  return (
    <div className="place-containers">
    <Link to={props.link} className="place-link">
      <strong className="place-name">{props.name}</strong>
    </Link>
    <p className="place-description">{props.description}</p>
    <img className="place-image" src={props.image} alt={props.name} />
  </div>
  );
}

export default Place;


