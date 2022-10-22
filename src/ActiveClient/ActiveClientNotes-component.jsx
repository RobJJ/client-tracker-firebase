import React from "react";
import { useOutletContext } from "react-router-dom";
//
const ActiveClientNotes = () => {
  const client = useOutletContext();
  //   console.log(client);
  //
  return (
    <div className="bg-green-100 w-full h-full">
      <div className="w-full h-full flex flex-col gap-3 p-2">
        <h2 className="h-10 bg-green-300 w-full pt-2 text-xl underline pl-2">
          Notes:
        </h2>
        <textarea
          className="h-full bg-white p-5 resize-none rounded-md"
          placeholder="The notes will go here"
        ></textarea>
      </div>
    </div>
  );
};

export default ActiveClientNotes;
