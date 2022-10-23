import React, { useEffect, useState } from "react";
// import { useOutletContext } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
const ActiveClientNotes = () => {
  // const client = useOutletContext();
  //   console.log(client);

  const { focused, handleNoteChange, updatedNotes, setUpdatedNotes } =
    useGlobalContext();
  useEffect(() => {
    setUpdatedNotes(focused.notes);
  }, []);
  //
  return (
    <div className="bg-green-100 w-full h-full">
      <form
        onSubmit={handleNoteChange}
        className="w-full h-full flex flex-col gap-3 p-2"
      >
        <h2 className="h-10 bg-green-300 w-full pt-2 text-xl underline pl-2">
          Notes:
        </h2>
        <textarea
          className="h-full bg-white p-5 resize-none rounded-md"
          placeholder="The notes will go here"
          value={updatedNotes}
          onChange={(e) => setUpdatedNotes(e.target.value)}
        ></textarea>
        <div className="text-center w-full">
          <button type="submit" className="bg-white p-2 rounded-xl">
            Update Client
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActiveClientNotes;
