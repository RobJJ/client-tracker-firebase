import React from "react";
import { Link } from "react-router-dom";
//
const ComplexInfo = ({ client }) => {
  return (
    <section className="bg-red-300 h-full w-full flex flex-col gap-1 p-1">
      <div className="bg-red-100 w-full h-8 flex text-center gap-1 items-center">
        <div className="bg-white w-1/4">NOTES</div>
        <div className="bg-white w-1/4">DEBIT</div>
        <div className="bg-white w-1/4">CREDIT</div>
        <div className="bg-white w-1/4">RECEIPTS</div>
      </div>
      <div className="bg-red-100 w-full h-full">display</div>
      <div className="bg-red-100 w-full h-8 flex justify-center items-center">
        <div className="bg-white px-2 rounded">UPDATE CLIENT</div>
      </div>
    </section>
  );
};

export default ComplexInfo;
