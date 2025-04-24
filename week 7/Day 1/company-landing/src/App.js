import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <Card 
          icon="building" 
          title="About the Company" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." 
        />
        <Card 
          icon="globe" 
          title="Our Values" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." 
        />
        <Card 
          icon="university" 
          title="Our Mission" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." 
        />
      </div>
      <Contact />
    </div>
  );
}

export default App;
