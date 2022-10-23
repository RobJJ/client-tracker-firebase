import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
const ComplexNav = ({ client }) => {
  const { focused } = useGlobalContext();

  // const { id } = client;

  return (
    <div className="bg-red-300 w-full h-12 flex text-center gap-1 items-center p-2 text-xl underline">
      <Link
        to={`/clientList/${focused.uniqueClient}`}
        className="bg-white w-1/4"
      >
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
