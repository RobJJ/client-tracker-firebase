import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import data from "../ClientData/ClientData-component";
// import Select from "react-select";
//
const ClientList = () => {
  //
  const [filteredClients, setFilteredClients] = useState(data);
  const [searchedLetters, setSearchedLetters] = useState("");
  //
  useEffect(() => {
    const filter = data.filter((client) =>
      client.name.toLowerCase().includes(searchedLetters.toLowerCase())
    );
    setFilteredClients(filter);
  }, [searchedLetters]);

  // };
  return (
    <div className="bg-white w-full h-full flex flex-col gap-1">
      <div className="bg-green-500 h-10 mt-1 p-1">
        <input
          type="search"
          placeholder="Search for client..."
          className="w-full h-full rounded p-2"
          value={searchedLetters}
          onChange={(e) => {
            setSearchedLetters(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        {filteredClients.map((client) => {
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
    </div>
  );
};

export default ClientList;
