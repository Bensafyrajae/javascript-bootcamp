import React from 'react';

function Card({ icon, title, text }) {
  return (
    <div className="d-flex align-items-start p-4 bg-light mb-3">
      <i className={`fas fa-${icon} fa-3x text-danger me-4`}></i>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
