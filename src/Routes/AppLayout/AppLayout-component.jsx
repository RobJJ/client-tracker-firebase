import React from "react";
import { Outlet } from "react-router-dom";
import NAVBAR from "../../Navbar/Navbar";
//
const AppLayout = () => {
  return (
    <div className="h-screen w-screen m-0 p-0 flex justify-center items-center">
      <div className="bg-slate-500 w-[650px] h-[750px] flex flex-col p-1 gap-1">
        <NAVBAR />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
