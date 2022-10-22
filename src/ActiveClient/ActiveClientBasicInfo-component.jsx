import React from "react";
import { Link } from "react-router-dom";
//
const BasicInfo = ({ client }) => {
  return (
    <section className="bg-orange-300 w-full h-40 flex p-1 gap-1">
      <div className="bg-orange-100 w-1/2 flex flex-col justify-around text-center">
        <h2 className="">Client: {client.name}</h2>
        <p className="">Email: client@clientserver.com</p>
        <p className="">Contact: 088-223-9911</p>
      </div>
      <div className="bg-orange-100 w-1/2 flex flex-col justify-around text-center">
        <p className="">Balance: 4 sessions remaining</p>
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
