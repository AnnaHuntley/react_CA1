
  import './App.css';
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Navbar from './components/Navbar';
  import Home from './components/Home';
  import About from './components/About';
  import Places from './components/Places';
  import Contact from './components/Contact';

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
        info: "Just 20 km from Dublin is the ineffably grand Powerscourt Estate. Set in 47 acres of beautiful land, the gardens were created 150 years ago with the idea of blending the stately home seamlessly into the surrounding landscape. Against the bold backdrop of the Great Sugar Loaf Mountains, the gardens are home to 200 varieties of trees, a rose garden, an Italian garden, and a large kitchen garden. There are many trails to walk along through the vast landscape – one of which leads to Powerscourt Falls, Ireland’s highest waterfall at 121 meters.",
        placeID: "Place ID: ChIJp-IbAv2mZ0gRvIV9f0y-uz0"
      },
      {
        name: "Guinness Storehouse",
        description: "Discover the secrets of Ireland's iconic Guinness beer at the Guinness Storehouse in Dublin.",
        link: "/places/guinness-storehouse",
        image: guinnessStorehouseImage,
        info: "Set in the heart of Dublin is the iconic Guinness Storehouse. The brewery has been making Guinness here since 1769 when Arthur Guinness signed a lease for 9,000 years. Nowadays the home of Guinness is a modern visitor attraction, where fans can learn about the process of making the famous black stuff, understand the history behind it and, of course, sample it.",
        placeID: "ChIJawXFQIQOZ0gRoucFdZIzGbM"
      },
      {
        name: "Skellig Michael",
        description: "Visit the awe-inspiring Skellig Michael, an island with a rich history and a famous filming location for Star Wars.",
        link: "/places/skellig-michael",
        image: skelligMichaelImage,
        info: "If you are into Star Wars then you will want to visit Skellig Michael – and if you’re not, you should visit anyway because it is awe-inspiringly beautiful. The rocky island rises out of the Atlantic just off the Iveragh Peninsula and was frequented by ascetic monks, who chose the towering sea crag as a place to live and worship somewhere between the 6th and 8th centuries.",
        placeID: " ChIJFQfF_We8T0gR4PkgJ-cXwJo"
      },
      {
        name: "Blarney Castle",
        description: "Experience the legendary Blarney Castle, where you can kiss the Blarney Stone and explore its medieval charm.",
        link: "/places/blarney-castle",
        image: blarneyCastleImage,
        info: "Stick your head over the parapet at the historic Blarney Castle and kiss the famous Blarney Stone as millions have done before you. It’s said that people who manage to kiss the mysterious Blarney Stone are endowed with ‘the gift of the gab’. This mystic relic isn’t the only interesting attraction at Blarney Castle – dating back to 1446, the medieval stronghold is a warren of stone passageways and dark dungeons, so take a tour and discover the castle’s hidden secrets and expanses of rambling green gardens.",
        placeID: "ChIJt0TfOD2QREgRyEeLjGPDt68"
      },
      {
        name: "Newgrange",
        description: " Step back in time at Newgrange, an ancient Megalithic Passage Tomb with fascinating Neolithic rock art.",
        link: "/places/newgrange",
        image: newgrangeImage,
        info: "The unimaginably old stone structure of Newgrange tomb was built in 3200 BC. The domed Megalithic Passage Tomb is estimated to have taken 300 people 20 years to build and covers an area of over one acre, revealing interior stones decorated with the spirals and curves of Neolithic rock art. During the Winter Solstice the passageway, along with the inner chamber, is incredibly illuminated by the sunrise that streams through a roof box at the entrance.",
        placeID: "ChIJL-3aomI4Z0gRF4zQvv0Phcw"
      },
      {
        name: "Cliffs of Moher",
        description: "Marvel at the breathtaking Cliffs of Moher, towering over the Atlantic Ocean and home to a diverse seabird colony.",
        link: "/places/cliffs-of-moher",
        image: cliffsOfMoherImage,
        info: "Standing at 214 meters over the depths of the Atlantic Ocean, and stretching for an awesome 8 km, are the rugged Cliffs of Moher in County Clare. Visitors are drawn to the cliffs, not just for their sheer impressive size, but also for the views of the breath-taking landscape – on a clear day it is possible to see all 5 of the surrounding counties as well as the Aran Islands. The awe-inspiring cliffs are also home to Ireland’s largest mainland seabird colony, which between April and July includes Puffins!",
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
              <Route path="/about" element={<About />} />
              <Route path="/places" element={<Places places={places} />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </div>
      </Router>
      </div>
    );
  }

  export default App;
