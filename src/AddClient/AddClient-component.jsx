import React from "react";
import { useGlobalContext } from "../Context-Reducer/Context";
//
//
const AddClient = () => {
  // Actions grabbed from context
  const { submitNewClient, setNewClientInfo, newClientInfo } =
    useGlobalContext();
  //
  return (
    <div className="bg-white w-full h-full p-2 flex justify-center">
      <div className="bg-blue-500 w-[400px] h-[450px] mt-16 p-2 flex justify-center items-center">
        <form
          className="bg-blue-300 w-full h-full flex flex-col justify-around"
          onSubmit={submitNewClient}
        >
          <div className="bg-blue-100 p-2 w-full flex items-center gap-3">
            <label className="underline w-1/4 text-center">Name: </label>
            <input
              type="text"
              className="p-1 rounded w-full"
              required
              value={newClientInfo.name}
              onChange={(e) =>
                setNewClientInfo({ ...newClientInfo, name: e.target.value })
              }
            />
          </div>
          <div className="bg-blue-100 p-2 w-full flex items-center gap-3">
            <label className="underline w-1/4 text-center">Email: </label>
            <input
              type="email"
              className="p-1 rounded w-full"
              required
              value={newClientInfo.email}
              onChange={(e) =>
                setNewClientInfo({ ...newClientInfo, email: e.target.value })
              }
            />
          </div>
          <div className="bg-blue-100 p-2 w-full flex items-center gap-3">
            <label className="underline w-1/4 text-center">Contact: </label>
            <input
              type="text"
              className="p-1 rounded w-full"
              required
              value={newClientInfo.contact}
              onChange={(e) =>
                setNewClientInfo({ ...newClientInfo, contact: e.target.value })
              }
            />
          </div>
          <div className="bg-blue-100 p-2 w-full flex items-center gap-3">
            <label className="underline w-1/4 text-center">Notes: </label>
            <textarea
              className="w-full rounded p-1 resize-none h-20"
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
          <div className="bg-blue-100 p-2 w-full flex items-center justify-center gap-3">
            <button
              className="bg-white rounded p-2 border border-black"
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
