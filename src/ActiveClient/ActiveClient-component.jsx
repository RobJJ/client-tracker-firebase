import React from "react";
import { useParams, Outlet } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
// import data from "../ClientData/ClientData-component";
import { clientData } from "../Data/ClientData";
import BasicInfo from "./ActiveClientBasicInfo-component";
import ComplexFooter from "./ComplexFooter-component";
import ComplexNav from "./ComplexNav-component";
//
const ActiveClient = () => {
  // is rendering correctly

  //
  return (
    <div className="bg-white w-full h-full flex flex-col p-1 overflow-auto">
      {/* BASIC INFO SECTION */}
      <BasicInfo />
      {/* COMPLEX INFO SECTION */}
      <ComplexNav />
      <Outlet />
    </div>
  );
};
export default ActiveClient;
