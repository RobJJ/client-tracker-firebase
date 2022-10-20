import React, { useState } from "react";
import data from "../ClientData/ClientData-component";
import Select from "react-select";
import ActiveClient from "../ActiveClient/ActiveClient-component";
//
const DebitCredit = () => {
  const [currentClient, setCurrentClient] = useState();
  //
  return (
    <div className="bg-white w-full h-full">
      <div className="flex flex-col">
        <Select options={data} onChange={(e) => setCurrentClient(e)} />
        {currentClient && (
          <div>
            <h2>{currentClient.name}</h2>
            <h2>{currentClient.age}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebitCredit;
