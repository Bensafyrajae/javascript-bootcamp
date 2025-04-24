import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const imageList = [
  {
    title: "Hong Kong",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Hong_Kong_Skyline_Restitch_-_Dec_2007.jpg"
  },
  {
    title: "Macao",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/72/Macau_skyline.jpg"
  },
  {
    title: "Japan",
    url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Tokyo_Montage_2015.jpg"
  },
  {
    title: "Las Vegas",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Las_Vegas_89.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <h2 className="text-center m-4">Travel Destinations</h2>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {imageList.map((img, index) => (
          <div key={index}>
            <img src={img.url} alt={img.title} style={{ maxHeight: '500px', objectFit: 'cover' }} />
            <p className="legend">{img.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
