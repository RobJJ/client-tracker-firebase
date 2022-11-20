import React from "react";
import { useGlobalContext } from "../Context-Reducer/Context";
import logo from "../Images/mai-method-resized.png";
//
const Home = () => {
  const { handleLogIn, userInSession } = useGlobalContext();
  //
  return (
    <div className="bg-white w-full h-full">
      <div className="flex flex-col h-full w-full ">
        <div className=" p-10 mt-5 ">
          <img
            src={logo}
            alt="Mai Method Logo"
            className="w-full bg-white rounded-2xl border-4 border-black"
          />
        </div>
        {!userInSession && (
          <div className=" text-center">
            <button
              type="button"
              onClick={handleLogIn}
              className="bg-slate-300 p-2 rounded-lg text-xl"
            >
              Log In With Google
            </button>
          </div>
        )}
        {userInSession && (
          <div className=" text-center">
            <button
              type="button"
              className="bg-slate-300 p-2 rounded-lg text-xl"
            >
              You're logged in!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
//
