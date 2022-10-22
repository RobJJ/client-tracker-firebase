import React from "react";
//
const ComplexDisplay = ({ client }) => {
  return (
    <div className="bg-green-100 w-full h-full">
      <h2>{client.name}</h2>
    </div>
  );
};

export default ComplexDisplay;
