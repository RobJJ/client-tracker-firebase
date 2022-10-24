import React from "react";
import { useOutletContext } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
const ActiveClientDebit = () => {
  // const client = useOutletContext();
  //   console.log(client);
  const { debitInfo, setDebitInfo, updateClientInfo, addDebitToClient } =
    useGlobalContext();
  //
  return (
    <div className=" w-full h-full rounded-b-lg">
      <div className="w-full h-full flex flex-col gap-3 p-2">
        {/* HEADER DISPLAY */}

        {/* MAIN PAGE DISPLAY */}
        <div className=" h-full w-full flex p-2 gap-2">
          {/* LEFT HAND SIDE DISPLAY */}
          <form
            className=" w-full  rounded-lg flex flex-col gap-1"
            onSubmit={addDebitToClient}
          >
            <div className="h-1/3 bg-[#F88074] flex flex-col text-center text-lg border-2 border-black rounded-lg">
              <label className="h-1/2 underline pt-2 text-xl">
                Payment Date:
              </label>
              <div className=" h-1/2">
                <input
                  required
                  type="date"
                  className=" text-center p-1 rounded-lg w-1/3"
                  value={debitInfo.date}
                  onChange={(e) =>
                    setDebitInfo({ ...debitInfo, date: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="h-1/3 bg-[#F88074] flex flex-col text-center text-lg border-2 border-black rounded-lg">
              <label className="h-1/2 underline text-xl pt-2">
                Payment Amount:
              </label>
              <div className="h-1/2">
                <input
                  required
                  type="text"
                  className=" text-center p-1 rounded-lg w-1/3"
                  placeholder="720 usd"
                  value={debitInfo.amount}
                  onChange={(e) =>
                    setDebitInfo({ ...debitInfo, amount: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="h-1/3 bg-[#F88074] border-2 border-black rounded-lg flex flex-col text-center text-lg">
              <label className="h-1/2 underline text-xl pt-2">
                Sessions Added:
              </label>
              <div className="  h-1/2">
                <input
                  required
                  type="number"
                  className=" text-center p-1 rounded-lg w-1/3 text-xl "
                  value={debitInfo.sessions}
                  onChange={(e) =>
                    setDebitInfo({ ...debitInfo, sessions: e.target.value })
                  }
                />
              </div>
            </div>
            <div
              className="text-center w-full bg-white text-2xl
font-navBarFont mt-2"
            >
              <button
                type="submit"
                className="bg-white text-[#F88074] p-2 rounded-xl  border-2 border-black w-40 tracking-wider underline "
                onClick={updateClientInfo}
              >
                Debit Client
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActiveClientDebit;

// const debitTemplate = {
//   date: "",
//   id: "",
//   amount: "",
//   sessions: 0,
// };
// const creditTemplate = {
//   date: "",
//   id: "",
//   sessions: 0,
// };

// <div className="bg-purple-300 h-10w-full pt-2 text-xl underline pl-2">
//   <h2>Debits:</h2>
// </div>;
