import React from "react";
import { useGlobalContext } from "../Context-Reducer/Context";
//
// ABB7BC - gray -bg-[#ABB7BC]
// F88074 - Orange - bg-[#F88074]
// A55A42 - BRown (extra)
//
const AddClient = () => {
  // Actions grabbed from context
  const { submitNewClient, setNewClientInfo, newClientInfo } =
    useGlobalContext();
  //
  return (
    <div className="bg-white w-full h-full p-2 flex justify-center">
      <div className="border-4 border-black w-[450px] h-[450px] pocket:h-3/4 mt-16 p-2 flex justify-center items-center rounded-xl">
        <form
          className=" w-full h-full flex flex-col justify-around bg-[#F88074] rounded-xl"
          onSubmit={submitNewClient}
        >
          <div className=" p-2 w-full flex items-center gap-3 rounded-xl">
            <input
              type="text"
              className="p-2 px-3 rounded-lg w-full border-2 border-black"
              required
              placeholder="Client Name"
              value={newClientInfo.name}
              onChange={(e) =>
                setNewClientInfo({ ...newClientInfo, name: e.target.value })
              }
            />
          </div>
          <div className=" p-2 w-full flex items-center gap-3  rounded-xl">
            <input
              type="email"
              className="p-2 px-3 rounded-lg w-full border-2 border-black"
              placeholder="Client Email"
              required
              value={newClientInfo.email}
              onChange={(e) =>
                setNewClientInfo({ ...newClientInfo, email: e.target.value })
              }
            />
          </div>
          <div className=" p-2 w-full flex items-center gap-3  rounded-xl">
            <input
              type="text"
              className="p-2 px-3 rounded-lg w-full border-2 border-black"
              placeholder="Client Contact Number"
              required
              value={newClientInfo.contact}
              onChange={(e) =>
                setNewClientInfo({ ...newClientInfo, contact: e.target.value })
              }
            />
          </div>
          <div className=" p-2 w-full flex items-center gap-3  rounded-xl">
            <textarea
              className="w-full rounded-lg p-2 px-3 resize-none h-20 pocket:h-32 border-2 border-black"
              placeholder="Client notes..."
              type="text"
              required
              value={newClientInfo.notes}
              onChange={(e) =>
                setNewClientInfo({
                  ...newClientInfo,
                  notes: [e.target.value],
                })
              }
            ></textarea>
          </div>
          <div className=" p-2 w-full flex items-center justify-center gap-3 font-navBarFont ">
            <button
              className="bg-white text-[#F88074] rounded-2xl p-2 border-2 border-black text-2xl underline w-40 tracking-wider"
              type="submit"
            >
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
