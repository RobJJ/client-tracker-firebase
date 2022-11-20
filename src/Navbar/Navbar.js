import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context-Reducer/Context";
//
import { FaUserCheck } from "react-icons/fa";
//
const NAVBAR = () => {
  const { ref, userInSession } = useGlobalContext();

  //
  return (
    <div className="bg-white w-full h-20 shrink-0 flex gap-2 border-b-4 border-black font-navBarFont ">
      <NavLink
        // to="addClient"
        to={!userInSession ? "" : "addClient"}
        data-tooltip-target="tooltip-default"
        className={({ isActive }) =>
          [
            "flex justify-center items-center w-1/2 h-full  underline rounded-t-xl",
            isActive ? "bg-[#ABB7BC] text-white" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
      >
        <h2 className="text-3xl tracking-wide">ADD CLIENT</h2>
      </NavLink>

      <NavLink
        // to="clientList"
        to={!userInSession ? "" : "clientList"}
        className={({ isActive }) =>
          [
            "flex justify-center items-center w-1/2 h-full  underline rounded-t-xl",
            isActive ? "bg-[#ABB7BC] text-white" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
      >
        <div className="w-full h-1/2 relative text-center flex items-center justify-center">
          {/* ALERT ICON FOR CLIENT ADDED */}
          <span
            ref={ref}
            className="absolute top-0 right-10 pocket:right-5 pocket-sm:right-1 pocket-ty:bottom-0 pocket-ty:right-0 hidden"
          >
            <FaUserCheck className="text-green-500 text-3xl pocket-ty:text-2xl" />
          </span>
          <h2 className="text-3xl tracking-wide">CLIENT LIST</h2>
        </div>
      </NavLink>
    </div>
  );
};

export default NAVBAR;
//
//
// <div
//   id="tooltip-default"
//   role="tooltip"
//   className="inline-block invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
// >
//   Please log in!
// </div>;
