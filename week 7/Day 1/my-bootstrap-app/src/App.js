import React from 'react';
import BootstrapCard from './components/BootstrapCard';

const celebrities = [
  {
    title: 'Bob Dylan',
    imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
    buttonLabel: 'Go to Wikipedia',
    buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
    description:
      'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  },
  {
    title: 'McCartney',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
    buttonLabel: 'Go to Wikipedia',
    buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
    description:
      'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
  },
];

const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

function App() {
  return (
    <div>
      <h2 className="text-center m-4">Famous People</h2>
      {celebrities.map((celeb, index) => (
        <BootstrapCard
          key={index}
          title={celeb.title}
          imageUrl={celeb.imageUrl}
          description={celeb.description}
          buttonLabel={celeb.buttonLabel}
          buttonUrl={celeb.buttonUrl}
        />
      ))}

      <div className="m-5">
        <h3>Planets</h3>
        <ul className="list-group">
          {planets.map((planet, index) => (
            <li key={index} className="list-group-item">
              {planet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
