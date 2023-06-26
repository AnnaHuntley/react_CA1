
  import './App.css';
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Navbar from './components/Navbar';
  import Home from './components/Home';
  import About from './components/About';
  import Places from './components/Places';
  import Contact from './components/Contact';
 

  import Blarney from './places/Blarney';
  import Moher from './places/Moher';
  import Powerscourt from './places/Powerscourt';
  import Guinness from './places/Guinness';
  import Skellig from './places/Skellig';
  import Newgrange from './places/Newgrange';

  import blarneyCastleImage from './images/blarney_castle.jpg';
  import cliffsOfMoherImage from './images/cliffs_of_moher.jpg';
  import guinnessStorehouseImage from './images/guinness_storehouse.jpg';
  import newgrangeImage from './images/newgrange.jpg';
  import powerscourtEstateImage from './images/powerscourt_estate.jpg';
  import skelligMichaelImage from './images/skellig_michael.jpg';



  function App() {
    var places = [
      {
        name: "Powerscourt Estate",
        description: "Immerse yourself in the grandeur of Powerscourt Estate, where stunning gardens and the highest waterfall in Ireland await.",
        link: "/places/powerscourt",
        image: powerscourtEstateImage,
        placeID: "ChIJp-IbAv2mZ0gRvIV9f0y-uz0"
      },
      {
        name: "Guinness Storehouse",
        description: "Discover the secrets of Ireland's iconic Guinness beer at the Guinness Storehouse in Dublin.",
        link: "/places/guinness-storehouse",
        image: guinnessStorehouseImage,
        placeID: "ChIJawXFQIQOZ0gRoucFdZIzGbM"
      },
      {
        name: "Skellig Michael",
        description: "Visit the awe-inspiring Skellig Michael, an island with a rich history and a famous filming location for Star Wars.",
        link: "/places/skellig-michael",
        image: skelligMichaelImage,
        placeID: " ChIJFQfF_We8T0gR4PkgJ-cXwJo"
      },
      {
        name: "Blarney Castle",
        description: "Experience the legendary Blarney Castle, where you can kiss the Blarney Stone and explore its medieval charm.",
        link: "/places/blarney-castle",
        image: blarneyCastleImage,
        placeID: "ChIJt0TfOD2QREgRyEeLjGPDt68"
      },
      {
        name: "Newgrange",
        description: " Step back in time at Newgrange, an ancient Megalithic Passage Tomb with fascinating Neolithic rock art.",
        link: "/places/newgrange",
        image: newgrangeImage,
        placeID: "ChIJL-3aomI4Z0gRF4zQvv0Phcw"
      },
      {
        name: "Cliffs of Moher",
        description: "Marvel at the breathtaking Cliffs of Moher, towering over the Atlantic Ocean and home to a diverse seabird colony.",
        link: "/places/cliffs-of-moher",
        image: cliffsOfMoherImage,
        placeID: " ChIJ84G4C68BW0gR5sC4SJBGOig"
      }

    ];

    return (
      <div>
        <Router>
        <div>
          <Navbar />
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="places" element={<Places places={places} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/places/powerscourt" element={<Powerscourt />} />
            <Route path="/places/guinness-storehouse" element={<Guinness />} />
            <Route path="/places/skellig-michael" element={<Skellig />} />
            <Route path="/places/blarney-castle" element={<Blarney />} />
            <Route path="/places/newgrange" element={<Newgrange />} />
            <Route path="/places/cliffs-of-moher" element={<Moher />} />
          </Routes>
          
        </div>
      </Router>
      </div>



    );
  }

  export default App;
