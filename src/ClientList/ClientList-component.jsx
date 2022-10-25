import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
// import data from "../ClientData/ClientData-component";
// import { clientData } from "../Data/ClientData";
import { useGlobalContext } from "../Context-Reducer/Context";
//
const ClientList = () => {
  //
  const { clients, dispatch, listReceipts } = useGlobalContext();
  // console.log(clients);
  //
  const [filteredClients, setFilteredClients] = useState(clients);
  const [searchedLetters, setSearchedLetters] = useState("");
  //
  useEffect(() => {
    const filter = clients.filter((client) =>
      client.name.toLowerCase().includes(searchedLetters.toLowerCase())
    );
    setFilteredClients(filter);
  }, [searchedLetters]);

  // };
  return (
    <div className=" overflow-auto w-full h-full flex justify-center p-2">
      <div className="border-4 border-black w-[450px] h-[450px] pocket:h-3/4 mt-16 p-2 flex flex-col justify-center items-center rounded-xl gap-2 ">
        <div className=" h-10 mt-1 p-1 w-full border-2 border-black rounded-lg">
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
        <div className=" overflow-auto h-full w-full">
          <div className="flex flex-col gap-1">
            {filteredClients.map((client) => {
              return (
                <Link
                  key={client.id}
                  onClick={() =>
                    dispatch({ type: "CAMS_MAGIC", payload: client })
                  }
                  to={`/clientList/${client.uniqueClient}`}
                  className="w-full h-10 bg-[#F88074] flex justify-around items-center rounded-lg text-lg"
                >
                  <h2>{client.name}</h2>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientList;
