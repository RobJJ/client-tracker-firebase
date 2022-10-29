import React from "react";
import { useGlobalContext } from "../Context-Reducer/Context";
//
const ActiveClientCredit = () => {
  //
  const { creditInfo, setCreditInfo, addCreditToClient } = useGlobalContext();
  //
  return (
    <div className=" w-full h-full">
      <div className="w-full h-full flex flex-col gap-3 p-2">
        {/* MAIN PAGE DISPLAY */}
        <section className=" h-full w-full flex p-2 gap-2">
          <form
            onSubmit={addCreditToClient}
            className="w-full flex flex-col gap-1  p-1"
          >
            <div className="h-1/2  flex flex-col pt-2 text-center  bg-[#F88074] border-2 border-black rounded-lg justify-center font-clientInfo tracking-wide">
              <label className="h-1/3 underline pt-2 short:pt-0 text-xl">
                Session Trained Date:
              </label>
              <div className=" h-2/3">
                <input
                  required
                  type="date"
                  value={creditInfo.date}
                  onChange={(e) =>
                    setCreditInfo({ ...creditInfo, date: e.target.value })
                  }
                  className=" text-center p-2 rounded-lg mt-2  w-1/3 pocket-sm:w-2/3 text-lg"
                />
              </div>
            </div>
            <div className="h-1/2 bg-[#F88074] border-2 border-black rounded-lg flex flex-col pt-2 text-center  justify-center font-clientInfo tracking-wide">
              <label className="h-1/3 underline pt-2 short:pt-0 text-xl ">
                Sessions Used:
              </label>
              <div className="  h-2/3 ">
                <input
                  required
                  type="number"
                  className=" text-center p-2 rounded-lg mt-2 w-1/3 pocket-sm:w-2/3 text-lg"
                  value={creditInfo.sessions}
                  onChange={(e) =>
                    setCreditInfo({ ...creditInfo, sessions: e.target.value })
                  }
                />
              </div>
            </div>
            <div
              className="text-center w-full text-2xl
font-navBarFont mt-2"
            >
              <button
                type="submit"
                className="bg-white text-[#F88074] p-2 rounded-xl  border-2 border-black w-40 tracking-wider underline "
              >
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
