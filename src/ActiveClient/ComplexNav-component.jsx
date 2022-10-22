import React from "react";
import { Link } from "react-router-dom";
//
const ComplexNav = ({ client }) => {
  const { id } = client;
  console.log(id);
  return (
    <div className="bg-red-300 w-full h-12 flex text-center gap-1 items-center p-2 text-xl underline">
      <Link to={`/clientList/${client.id}`} className="bg-white w-1/4">
        NOTES
      </Link>
      <Link to={`debits`} className="bg-white w-1/4">
        DEBIT
      </Link>
      <Link to={`credits`} className="bg-white w-1/4">
        CREDIT
      </Link>
      <Link to={`receipts`} className="bg-white w-1/4">
        RECEIPTS
      </Link>
    </div>
  );
};

export default ComplexNav;
