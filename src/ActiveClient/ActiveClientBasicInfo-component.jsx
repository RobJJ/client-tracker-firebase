import React from "react";
import { useGlobalContext } from "../Context-Reducer/Context";
//
import { FaCheck } from "react-icons/fa";
//
const BasicInfo = () => {
  const { focused, clientUpdated } = useGlobalContext();
  //
  return (
    <section className=" w-full h-40  flex p-1 gap-1 text-lg font-clientInfo tracking-wider">
      <div className=" rounded-lg w-1/2 flex flex-col justify-around items-center text-center p-2 gap-2 ">
        <h2 className="bg-[#F88074] w-full border-2 border-black rounded-lg h-1/3  whitespace-nowrap truncate">
          {focused.name}
        </h2>
        <p className="bg-[#F88074] w-full border-2 border-black rounded-lg h-1/3 truncate">
          {focused.email}
        </p>
        <p className="bg-[#F88074] w-full border-2 border-black rounded-lg h-1/3 truncate">
          {focused.contact}
        </p>
      </div>
      <div className=" rounded-lg w-1/2 p-2 flex flex-col gap-2 text-center items-center">
        <p className="bg-[#F88074] w-full border-2 border-black rounded-lg">
          <span className="underline">Balance</span>
          <br /> {focused.balance}
        </p>
        <span className="mt-2 hidden" ref={clientUpdated}>
          <FaCheck className="text-green-500 text-4xl " />
        </span>
      </div>
    </section>
  );
};

export default BasicInfo;
