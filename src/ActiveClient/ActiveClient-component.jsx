import React from "react";
import { useParams, Outlet } from "react-router-dom";
import data from "../ClientData/ClientData-component";
import BasicInfo from "./ActiveClientBasicInfo-component";
import ComplexFooter from "./ComplexFooter-component";
import ComplexNav from "./ComplexNav-component";
//
const ActiveClient = () => {
  //
  const { clientId } = useParams();
  // Find the client based off the url param id
  const client = data.find((client) => client.id === clientId);
  //
  return (
    <div className="bg-white w-full h-full flex flex-col">
      {/* BASIC INFO SECTION */}
      <BasicInfo client={client} />
      {/* COMPLEX INFO SECTION */}
      <ComplexNav client={client} />
      <Outlet context={client} />
      <ComplexFooter />
    </div>
  );
};
export default ActiveClient;
