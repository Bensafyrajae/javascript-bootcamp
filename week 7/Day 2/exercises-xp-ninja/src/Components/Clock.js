import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

   
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurrentDate(new Date());
  };

  return (
    <div>
      <h2>Local Time:</h2>
      <h3>{currentDate.toLocaleTimeString()}</h3>
    </div>
  );
}

export default Clock;
