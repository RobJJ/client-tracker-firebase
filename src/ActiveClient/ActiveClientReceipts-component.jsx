import React, { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
const dummyData = [
  // {
  //   date: "2022-10-22",
  //   id: "qweqw",
  //   amount: "322",
  //   sessions: 5,
  // },
  // {
  //   date: "2022-09-15",
  //   id: "gqwe",
  //   amount: "550",
  //   sessions: 10,
  // },
];

const ActiveClientReceipts = () => {
  // const client = useOutletContext();
  //   console.log(client);
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
      {/*<div className="p-2 gap-3 flex flex-col border border-black">*/}
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
      {/*</div>*/}
    </div>
  );
};

export default ActiveClientReceipts;

//receipts: { debits: [], credits: [] },
// const debitTemplate = {
//   date: "",
//   id: "",
//   amount: "",
//   sessions: 0,
// };
//
// <div className="flex flex-col gap-1">
//   {filteredClients.map((client) => {
//     return (
//       <Link
//         key={client.id}
//         to={`/clientList/${client.id}`}
//         className="w-full h-10 bg-green-200 flex justify-around items-center"
//       >
//         <h2>{client.name}</h2>
//         <p>{client.age}</p>
//       </Link>
//     );
//   })}
// </div>;
