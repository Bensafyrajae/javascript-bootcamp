import React, { useState } from 'react';

function Forms() {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    description: '',
    car: 'Volvo',
    errormessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = '';
    if (name === "age") {
      if (isNaN(value)) {
        error = "Your age must be a number";
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      errormessage: error
    }));
  };

  const mySubmitHandler = (e) => {
    e.preventDefault();
    alert(`You are submitting ${formData.username}`);
  };

  let header = null;
  if (formData.username) {
    header = <h1>Hello {formData.username} {formData.age && `, Age: ${formData.age}`}</h1>;
  }

  return (
    <div>
      {header}
      <form onSubmit={mySubmitHandler}>
        <p>Enter your name:</p>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br /><br />
        <p>Enter your age:</p>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        {formData.errormessage && (
          <p style={{ color: 'red' }}>{formData.errormessage}</p>
        )}
        <br />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write something..."
        />
        <br /><br />
        <select
          name="car"
          value={formData.car}
          onChange={handleChange}
        >
          <option value="Volvo">Volvo</option>
          <option value="Saab">Saab</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
        </select>
        <br /><br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Forms;
