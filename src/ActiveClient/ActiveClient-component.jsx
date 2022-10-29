import React from "react";
import { Outlet } from "react-router-dom";

import BasicInfo from "./ActiveClientBasicInfo-component";
import ComplexNav from "./ComplexNav-component";
//
const ActiveClient = () => {
  //
  return (
    <div className=" w-full h-full flex flex-col p-2 overflow-auto short:p-0">
      {/* BASIC INFO SECTION */}
      <BasicInfo />
      {/* COMPLEX INFO SECTION */}
      <ComplexNav />
      <Outlet />
    </div>
  );
};
export default ActiveClient;
//
