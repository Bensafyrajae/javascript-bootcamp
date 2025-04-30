import React from 'react';

function Input({ label, type, name, value, onChange, error }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label>{label}</label>
      <br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ borderColor: error ? 'red' : 'black' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Input;
