import React from 'react';

const GenerateButton = ({ onClick }) => {
  return (
    <button className="btn btn-pink" onClick={onClick}>
      Generate
    </button>
  );
}

export default GenerateButton;
