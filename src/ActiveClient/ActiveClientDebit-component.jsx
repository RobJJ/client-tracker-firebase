import React from "react";
import { useOutletContext } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
const ActiveClientDebit = () => {
  // const client = useOutletContext();
  //   console.log(client);
  const { debitInfo, setDebitInfo, focused, addDebitToClient } =
    useGlobalContext();
  //
  return (
    <div className="bg-purple-100 w-full h-full">
      <div className="w-full h-full flex flex-col gap-3 p-2">
        {/* HEADER DISPLAY */}
        <div className="bg-purple-300 h-10w-full pt-2 text-xl underline pl-2">
          <h2>Debits:</h2>
        </div>
        {/* MAIN PAGE DISPLAY */}
        <div className="bg-purple-300 h-full w-full flex p-2 gap-2">
          {/* LEFT HAND SIDE DISPLAY */}
          <form
            className="w-full border flex flex-col gap-1  p-1"
            onSubmit={addDebitToClient}
          >
            <div className="h-1/3 bg-purple-100 flex flex-col text-center text-lg">
              <label className="h-1/2 underline pt-2 text-xl">
                Payment Date:
              </label>
              <div className=" h-1/2">
                <input
                  required
                  type="date"
                  className=" text-center p-1 rounded-lg"
                  value={debitInfo.date}
                  onChange={(e) =>
                    setDebitInfo({ ...debitInfo, date: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="h-1/3 bg-purple-100 flex flex-col text-center text-lg">
              <label className="h-1/2 underline text-xl pt-2">
                Payment Amount:
              </label>
              <div className="h-1/2">
                <input
                  required
                  type="text"
                  className=" text-center p-1 rounded-lg"
                  placeholder="720 usd"
                  value={debitInfo.amount}
                  onChange={(e) =>
                    setDebitInfo({ ...debitInfo, amount: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="h-1/3 bg-purple-100 flex flex-col text-center text-lg">
              <label className="h-1/2 underline text-xl pt-2">
                Sessions Added:
              </label>
              <div className="  h-1/2">
                <input
                  required
                  type="number"
                  className=" text-center p-1 rounded-lg w-1/3 text-xl"
                  value={debitInfo.sessions}
                  onChange={(e) =>
                    setDebitInfo({ ...debitInfo, sessions: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="text-center w-full">
              <button type="submit" className="bg-white p-2 rounded-xl ">
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
