import React from "react";
import { Link } from "react-router-dom";

//
const NAVBAR = () => {
  return (
    <div className="bg-white w-full h-20 flex gap-2">
      <Link
        to="addClient"
        className="flex justify-center items-center w-1/2 h-full bg-pink-200 underline"
      >
        <h2>ADD CLIENT</h2>
      </Link>
      <Link
        to="clientList"
        className="flex justify-center items-center w-1/2 h-full bg-pink-200 underline"
      >
        <h2>CLIENT LIST</h2>
      </Link>
    </div>
  );
};

export default NAVBAR;
