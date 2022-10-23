import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
const BasicInfo = ({ client }) => {
  const { focused } = useGlobalContext();
  //
  return (
    <section className="bg-orange-300 w-full h-40 flex p-1 gap-1">
      <div className="bg-orange-100 w-1/2 flex flex-col justify-around text-center">
        <h2 className="">Client: {focused.name}</h2>
        <p className="">Email: {focused.email}</p>
        <p className="">Contact: {focused.contact}</p>
      </div>
      <div className="bg-orange-100 w-1/2 flex flex-col justify-around text-center">
        <p className="">Balance: {focused.balance}</p>
        <div>
          <Link to="/clientList" className="bg-white p-2 rounded-md">
            Back to the ClientList!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BasicInfo;
