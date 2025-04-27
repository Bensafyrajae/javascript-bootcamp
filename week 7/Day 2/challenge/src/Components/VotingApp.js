import React, { useState } from 'react';

function VotingApp() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Vote For Your Favorite Language!</h1>
      {languages.map((language, index) => (
        <div key={index} style={{ margin: '20px' }}>
          <button 
            onClick={() => handleVote(index)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            Vote {language.name}
          </button>
          <span style={{ fontSize: '18px' }}>{language.votes} votes</span>
        </div>
      ))}
    </div>
  );
}

export default VotingApp;
