import React from 'react';

const PanelButton = ({ label, onClick }) => {
  return (
    <button
      className="w-full bg-blue-500 text-white py-2 my-2 rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PanelButton;
