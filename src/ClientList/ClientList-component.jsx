import React from "react";
import { Link, Outlet } from "react-router-dom";
import data from "../ClientData/ClientData-component";
//
const ClientList = () => {
  return (
    <div className="bg-white w-full h-full flex flex-col gap-1">
      {data.map((client) => {
        console.log(client.id);
        return (
          <Link
            key={client.id}
            to={`/clientList/${client.id}`}
            className="w-full h-10 bg-green-200 flex justify-around items-center"
          >
            <h2>{client.name}</h2>
            <p>{client.age}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ClientList;
