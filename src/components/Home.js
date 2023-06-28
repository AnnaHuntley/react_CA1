import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import blarneyCastleImage from '../images/blarney_castle.jpg';
import cliffsOfMoherImage from '../images/cliffs_of_moher.jpg';
import guinnessStorehouseImage from '../images/guinness_storehouse.jpg';
import newgrangeImage from '../images/newgrange.jpg';
import powerscourtEstateImage from '../images/powerscourt_estate.jpg';
import skelligMichaelImage from '../images/skellig_michael.jpg';

function Home() {
  return (
    <div className="home-about">
      <h2>Welcome to the Ireland Tourist Guide!</h2>
      <Carousel>
        <div>
          <img src={blarneyCastleImage} alt="Blarney Castle" />
          <p className="legend">Blarney Castle</p>
        </div>
        <div>
          <img src={cliffsOfMoherImage} alt="Cliffs of Moher" />
          <p className="legend">Cliffs of Moher</p>
        </div>
        <div>
          <img src={guinnessStorehouseImage} alt="Guinness Storehouse" />
          <p className="legend">Guinness Storehouse</p>
        </div>
        <div>
          <img src={newgrangeImage} alt="Newgrange" />
          <p className="legend">Newgrange</p>
        </div>
        <div>
          <img src={powerscourtEstateImage} alt="Powerscourt Estate" />
          <p className="legend">Powerscourt Estate</p>
        </div>
        <div>
          <img src={skelligMichaelImage} alt="Skellig Michael" />
          <p className="legend">Skellig Michael</p>
        </div>
      </Carousel>
      <p>
        Explore the captivating beauty and rich history of Ireland. From majestic castles to stunning landscapes,
        Ireland has something for everyone. Start your journey today and discover the wonders that await you in this enchanting country.
      </p>
    </div>
  );
}

export default Home;
