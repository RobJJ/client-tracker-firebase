import React from "react";
import logo from "../Images/mai-method-resized.png";
//
const Home = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="flex flex-col h-full w-full bg-gray-500">
        <div className=" p-10 mt-5">
          <img
            src={logo}
            alt="Mai Method Logo"
            className="w-full bg-white rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
//
