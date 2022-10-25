import React, { useEffect, useState } from "react";
// import { useOutletContext } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
const ActiveClientNotes = () => {
  // const client = useOutletContext();
  //   console.log(client);

  const {
    focused,
    handleNoteChange,
    updatedNotes,
    setUpdatedNotes,
    updateClientInfo,
  } = useGlobalContext();
  useEffect(() => {
    setUpdatedNotes(focused.notes);
  }, []);
  //
  return (
    <div className=" w-full h-full rounded-b-lg">
      <form
        onSubmit={handleNoteChange}
        className="w-full h-full flex flex-col gap-3 p-2"
      >
        <textarea
          className="h-full text-3xl p-5 resize-none rounded-md mt-3 border-2 border-black  bg-[#F88074] placeholder-white font-clientNotes"
          placeholder="Add some notes here..."
          value={updatedNotes}
          onChange={(e) => setUpdatedNotes(e.target.value)}
        ></textarea>
        <div className="text-center text-2xl w-full font-navBarFont">
          <button
            type="submit"
            className="bg-white text-[#F88074] p-2 rounded-xl  border-2 border-black w-40 tracking-wider underline"
            onClick={updateClientInfo}
          >
            Update Client
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActiveClientNotes;

// <h2 className="h-10 bg-[#F88074] w-full p-2 text-xl underline pl-4 rounded-lg">
//   Notes:
// </h2>;
