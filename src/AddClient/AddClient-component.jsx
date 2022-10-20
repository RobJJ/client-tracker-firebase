import React from "react";
//
const AddClient = () => {
  return (
    <div className="bg-white w-full h-full p-2 flex justify-center">
      <div className="bg-blue-500 w-[400px] h-[450px] mt-16 p-2 flex justify-center items-center">
        <form className="bg-blue-300 w-full h-full flex flex-col justify-around">
          <div className="bg-blue-100 p-2 w-full flex items-center gap-3">
            <label className="underline w-1/4 text-center">Name: </label>
            <input type="text" className="p-1 rounded w-full" />
          </div>
          <div className="bg-blue-100 p-2 w-full flex items-center gap-3">
            <label className="underline w-1/4 text-center">Email: </label>
            <input type="email" className="p-1 rounded w-full" />
          </div>
          <div className="bg-blue-100 p-2 w-full flex items-center gap-3">
            <label className="underline w-1/4 text-center">Contact: </label>
            <input type="text" className="p-1 rounded w-full" />
          </div>
          <div className="bg-blue-100 p-2 w-full flex items-center gap-3">
            <label className="underline w-1/4 text-center">Notes: </label>
            <textarea
              className="w-full rounded p-1 resize-none h-20"
              placeholder="Client notes..."
              name=""
              id=""
            ></textarea>
          </div>
          <div className="bg-blue-100 p-2 w-full flex items-center justify-center gap-3">
            <button className="bg-white rounded p-2 border border-black">
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;

// <form className=" bg-blue-500 h-full w-full flex flex-col p-2 gap-2">
//   <div className="flex bg-blue-300">
//     <label>Name: </label>
//     <input type="text" />
//   </div>
//   <div className="flex bg-blue-300">
//     <label>Email: </label>
//     <input type="text" />
//   </div>
//   <div className="flex bg-blue-300">
//     <label>Notes: </label>
//     <input type="text" />
//   </div>
// </form>;
