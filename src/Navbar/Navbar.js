import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
import { FaUserCheck } from "react-icons/fa";
//
const NAVBAR = () => {
  const { ref } = useGlobalContext();
  //
  return (
    <div className="bg-white w-full h-20 shrink-0 flex gap-2">
      <Link
        to="addClient"
        className="flex justify-center items-center w-1/2 h-full bg-pink-200 underline "
      >
        <h2>ADD CLIENT</h2>
      </Link>
      <Link
        to="clientList"
        className="flex justify-center items-center w-1/2 h-full bg-pink-200 underline "
      >
        <div className="w-full h-1/2 relative text-center flex items-center justify-center">
          <span ref={ref} className="absolute top-0 right-10 hidden">
            <FaUserCheck className="text-green-500 text-3xl " />
          </span>
          <h2>CLIENT LIST</h2>
        </div>
      </Link>
    </div>
  );
};

export default NAVBAR;
