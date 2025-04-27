import React, { useState } from 'react';

function Phone() {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  const changeColor = () => {
    setPhone({ ...phone, color: "blue" });
  };

  return (
    <div>
      <h1>My phone is a {phone.color} {phone.brand} {phone.model} from {phone.year}</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Phone;
