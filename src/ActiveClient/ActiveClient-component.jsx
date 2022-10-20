import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../ClientData/ClientData-component";
//
const ActiveClient = () => {
  //
  const { clientId } = useParams();
  const client = data.find((client) => client.id === clientId);
  //
  return (
    <div className="bg-white w-full h-full">
      <h2>Hi, this is the individual client page!</h2>
      <h2>{client.name}</h2>
      <p>{client.age}</p>
      <Link to="/clientList">Back to the ClientList!</Link>
    </div>
  );
};

export default ActiveClient;
