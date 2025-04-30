import React, { useState } from 'react';
import FormComponent from './FormComponent';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    diet: {
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    }
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        diet: {
          ...prevData.diet,
          [name]: checked ? true : false
        }
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  return (
    <div>
      <FormComponent formData={formData} handleChange={handleChange} />
    </div>
  );
};

export default App;