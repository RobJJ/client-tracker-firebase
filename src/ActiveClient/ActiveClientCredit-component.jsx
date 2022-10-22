import React from "react";
import { useOutletContext } from "react-router-dom";
//
const ActiveClientCredit = () => {
  const client = useOutletContext();
  //   console.log(client);
  //
  return (
    <div className="bg-pink-100 w-full h-full">
      <div className="w-full h-full flex flex-col gap-3 p-2">
        {/* HEADER DISPLAY */}
        <section className="bg-purple-300 h-10 w-full pt-2 text-xl underline pl-2">
          <h2>Credits:</h2>
        </section>
        {/* MAIN PAGE DISPLAY */}
        <section className="bg-purple-300 h-full w-full flex p-2 gap-2">
          {/* LEFT HAND SIDE DISPLAY */}
          <div className="w-full border flex flex-col gap-1  p-1">
            <div className="h-1/2 bg-purple-100 flex flex-col pt-5 text-center text-lg">
              <label className="h-1/3 underline pt-5 text-xl">
                Session Trained Date:
              </label>
              <div className=" bg-gray-300 h-2/3">
                <input
                  type="date"
                  className=" text-center p-2 rounded-lg mt-2"
                />
              </div>
            </div>
            <div className="h-1/2 bg-purple-100 flex flex-col pt-5 text-center text-lg">
              <label className="h-1/3 underline pt-5 text-xl">
                Sessions Amount:
              </label>
              <div className=" bg-gray-300 h-2/3">
                <input
                  type="number"
                  className=" text-center p-2 rounded-lg mt-2"
                />
              </div>
            </div>
          </div>
          {/* RIGHT HAND SIDE DISPLAY */}
        </section>
      </div>
    </div>
  );
};

export default ActiveClientCredit;
