import React from "react";
// import { useOutletContext } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
const ActiveClientCredit = () => {
  // const client = useOutletContext();
  //   console.log(client);
  const { creditInfo, setCreditInfo, addCreditToClient } = useGlobalContext();
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
          <form
            onSubmit={addCreditToClient}
            className="w-full border flex flex-col gap-1  p-1"
          >
            <div className="h-1/2 bg-purple-100 flex flex-col pt-5 text-center text-lg">
              <label className="h-1/3 underline pt-5 text-xl">
                Session Trained Date:
              </label>
              <div className=" bg-gray-300 h-2/3">
                <input
                  required
                  type="date"
                  value={creditInfo.date}
                  onChange={(e) =>
                    setCreditInfo({ ...creditInfo, date: e.target.value })
                  }
                  className=" text-center p-2 rounded-lg mt-2"
                />
              </div>
            </div>
            <div className="h-1/2 bg-purple-100 flex flex-col pt-5 text-center text-lg">
              <label className="h-1/3 underline pt-5 text-xl">
                Sessions Used:
              </label>
              <div className=" bg-gray-300 h-2/3">
                <input
                  required
                  type="number"
                  className=" text-center p-2 rounded-lg mt-2"
                  value={creditInfo.sessions}
                  onChange={(e) =>
                    setCreditInfo({ ...creditInfo, sessions: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="text-center w-full">
              <button type="submit" className="bg-white p-2 rounded-xl ">
                Credit Client
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ActiveClientCredit;
