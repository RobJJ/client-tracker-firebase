import React from "react";
import { Link } from "react-router-dom";
//
const ComplexNav = ({ client }) => {
  const { id } = client;
  console.log(id);
  return (
    <div className="bg-red-300 w-full h-8 flex text-center gap-1 items-center p-1">
      <Link to={`notes`} className="bg-white w-1/4">
        NOTES
      </Link>
      <div className="bg-white w-1/4">DEBIT</div>
      <div className="bg-white w-1/4">CREDIT</div>
      <div className="bg-white w-1/4">RECEIPTS</div>
    </div>
  );
};

export default ComplexNav;
