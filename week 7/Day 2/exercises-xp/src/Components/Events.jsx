import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`You entered: ${e.target.value}`);
    }
  };

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      <br /><br />
      <input type="text" onKeyDown={handleKeyDown} />
      <br /><br />
      <button onClick={toggle}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Events;
