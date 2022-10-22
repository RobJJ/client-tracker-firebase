import React from "react";
import { useOutletContext } from "react-router-dom";
//
const ActiveClientNotes = () => {
  const client = useOutletContext();
  //   console.log(client);
  //
  return (
    <div className="bg-green-100 w-full h-full">
      <h2>{client.name}</h2>
      <h2>{client.notes}</h2>
    </div>
  );
};

export default ActiveClientNotes;
