import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Place from '../view/Place';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Blarney from '../places/Blarney';
import Guinness from '../places/Guinness';
import Moher from '../places/Moher';
import Newgrange from '../places/Newgrange';
import Powerscourt from '../places/Powerscourt';
import Skellig from '../places/Skellig'



function Places(props) {
  const [placeDetails, setPlaceDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Fetch place details from the Google Places API
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get('/api/maps/api/place/details/json', {
          params: {
            place_id: 'ChIJ84G4C68BW0gR5sC4SJBGOig',
            fields: 'name,formatted_address',
            key: 'AIzaSyC9DZIJ-77Ydluh2ZGh7xWjLVrt2lt7tlk',
          },
        });

        setPlaceDetails(response.data.result);
      } catch (error) {
        console.log('Error fetching place details:', error);
      }
    };

    fetchPlaceDetails();
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      {placeDetails && (
        <div>
          <button onClick={toggleDetails}>Address</button>
          {showDetails && (
            <div>
              <h2>{placeDetails.name}</h2>
              <p>{placeDetails.formatted_address}</p>
            </div>
          )}
        </div>
      )}

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

    <Routes>
        <Route path="../places/powerscourt" element={<Powerscourt />} />
        <Route path="../places/guinness-storehouse" element={<Guinness />} />
        <Route path="../places/skellig-michael" element={<Skellig />} />
        <Route path="../places/blarney-castle" element={<Blarney />} />
        <Route path="../places/newgrange" element={<Newgrange />} />
        <Route path="../places/cliffs-of-moher" element={<Moher />} />
      </Routes>
    </div>
  );
}

export default Places;
