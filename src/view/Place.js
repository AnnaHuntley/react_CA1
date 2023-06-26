import React from 'react';
import { Link } from 'react-router-dom';

function Place(props) {
  return (
    <div>
      <Link to={props.link}>
        <strong>{props.name}</strong>
      </Link>
      <p>{props.description}</p>
      <p>{props.info}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Place;


