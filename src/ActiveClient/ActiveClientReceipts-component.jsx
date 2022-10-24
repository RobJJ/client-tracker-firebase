import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context-Reducer/Context";
//

const ActiveClientReceipts = () => {
  //
  const { focused } = useGlobalContext();
  const [orderedReceipts, setOrderedReceipts] = useState([]);
  //
  useEffect(() => {
    if (Object.keys(focused).length === 0) return;
    //
    let tempArr = [];
    focused.receipts.debits.forEach((debit) => tempArr.push(debit));
    focused.receipts.credits.forEach((credit) => tempArr.push(credit));
    //
    tempArr.sort(
      (b, a) =>
        new Date(a.date.split("/").reverse()) -
        new Date(b.date.split("/").reverse())
    );
    setOrderedReceipts(tempArr);
  }, [focused]);

  //
  return (
    <div className="bg-blue-100 w-full h-full overflow-auto flex flex-col gap-2">
      <div className="bg-purple-300 h-10 w-full pt-2 mt-2 text-xl underline p-2 flex text-center ">
        <h2 className="w-1/3 underline">Date</h2>
        <h2 className="w-1/3 underline">Amount</h2>
        <h2 className="w-1/3 underline">Sessions</h2>
      </div>
      <div className="h-full w-full border border-black overflow-auto">
        <div className="flex flex-col gap-1">
          {orderedReceipts &&
            orderedReceipts.map((debit) => {
              return (
                <div
                  key={debit.id}
                  className={`w-full h-10  flex text-center rounded-xl  items-center ${
                    debit.amount ? "bg-green-200" : "bg-yellow-200"
                  }`}
                >
                  <span className="w-1/3">{debit.date}</span>
                  <span className="w-1/3">{debit.amount}</span>
                  <span className="w-1/3">{debit.sessions}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ActiveClientReceipts;
